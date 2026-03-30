macroScript quickAttach
category:"D95 DESIGN"
tooltip:"Quick Attach"
buttontext:"Q.A"
(
	if selection.count > 1 then undo off
	(	
		geoArray = #()
		shapeArray = #()
		
		for s in selection where IsValidNode s do 
		(
			case (SuperClassOf s) of
			(
				GeometryClass: (append geoArray s)
				Shape: (append shapeArray s)
			)
		)
		
		
		max create mode
		clearSelection()
		
		if geoArray.count > 1 do
		(
			while geoArray.count > 1 do
			(
				tempCount = 0
				tempArr = #()
				tempObj = Editable_Mesh()
				convertTo tempObj Editable_Poly
				tempObj.name = geoArray[1].name
				append tempArr tempObj
				for i = 1 to geoArray.count do
				(
					tempCount += 1
					if tempCount >= 500 then
					(
						tempCount = 0
						tempObj = Editable_Mesh()
						convertTo tempObj Editable_Poly
						tempObj.name = geoArray[i].name
						append tempArr tempObj
						windows.processPostedMessages() 
					)
					polyop.attach tempObj geoArray[i]
				)
				geoArray = tempArr
			)
		)
		
		if shapeArray.count > 1 then 
		(
			while shapeArray.count > 1 do
			(
				tempCount = 0
				tempArr = #()
				tempObj = SplineShape()
				tempObj.name = shapeArray[1].name
				append tempArr tempObj
				for i = 1 to shapeArray.count do
				(
					tempCount += 1
					if tempCount >= 500 then
					(
						tempCount = 0
						tempObj = SplineShape()
						tempObj.name = shapeArray[i].name
						append tempArr tempObj
						windows.processPostedMessages() 
					)
					convertTo shapeArray[i] SplineShape
					addAndWeld tempObj shapeArray[i] -1
				)
				shapeArray = tempArr
			)
		)

		try outputObj = geoArray[1] catch()
		try outputShape = shapeArray[1] catch()
		
		if outputObj != undefined then 
		(
			centerPivot outputObj
			select outputObj
			max modify mode
			modPanel.addModToSelection (Edit_Normals()) ui:on
			normalMod = outputObj.Edit_Normals.EditNormalsMod
			normcount = normalMod.GetNumNormals()
			normalMod.SetSelection #{1..normcount}
			normalMod.Specify()
			normalMod.Reset()	
			maxOps.CollapseNodeTo $ 1 true
		)
		
		if outputShape != undefined then 
		(
			centerPivot outputShape
			selectMore outputShape
		)
	)
)

macroScript quickDetach
category:"D95 DESIGN"
tooltip:"Quick Detach"
buttontext:"Q.D"
(
	if selection.count > 0 then undo off
	(
		outputArr = #()
		for obj in selection where (canConvertTo obj Editable_Poly) do
		(
			convertTo obj Editable_Poly
			while obj.getNumFaces() != 0 do 
			(
				newName = uniqueName obj.name
				polyop.setFaceSelection obj #{1}
				obj.selectElement()
				ele = polyop.getFaceSelection obj
				polyop.detachFaces obj ele asNode:true name:newName
				newObj = getNodeByName newName
				centerPivot newObj
				append outputArr newObj
			)
			delete obj
			gc()
		)
		select outputArr
	)
)

