macroScript quickMaterialOverride
category:"D95 DESIGN"
tooltip:"Material Quick Override"
buttontext:"Override"
(
	curRender = renderers.current
	curRenderClass = case of
	(
		(matchPattern (getClassName curRender) pattern:"Corona*"): "Corona"
		(matchPattern (getClassName curRender) pattern:"V-Ray*"): "Vray"
		default: "Not Support"
	)
	
	onMess = "Override mode has been turned ON!"
	offMess = "Override mode has been turned OFF!"
	if keyboard.shiftPressed then onMess += " (with edge)"
	
	fn switchModeCorona =
	(
		grayMode = curRender.mtlOverride_enabled == true
		
		mtlOverride = CoronaMtl()
		mtlOverride.name = "Corona Override Material"
		
		if keyboard.shiftPressed then
		(
			mtlTex = CoronaWire()
			mtlOverride.texmapDiffuse = mtlTex
			grayMode = false
		)

		if grayMode then
		(
			curRender.mtlOverride_enabled = false
			messageBox offMess title:"Quick Override Material"
		)
		else
		(
			curRender.mtlOverride_enabled = true
			curRender.mtlOverride = mtlOverride
			messageBox onMess title:"Quick Override Material"
		)
	)
	
	fn switchModeVray =
	(
		mtlOverride = VRayMtl()
		mtlOverride.name = "Vray Override Material"

		if keyboard.shiftPressed then
		(
			mtlTex = VRayEdgesTex()
			mtlTex.edgesColor = color 0 0 0
			mtlOverride.texmap_diffuse = mtlTex
			grayMode = false
		)
		
		if (matchPattern (getClassName curRender) pattern:"V-Ray GPU*") then
		(
			grayMode = curRender.overrideMtl_on == true
			if grayMode then
			(
				curRender.overrideMtl_on = false
				messageBox offMess title:"Quick Override Material"			
			)
			else
			(
				curRender.overrideMtl_on = true
				curRender.overrideMtl_mtl = mtlOverride
				messageBox onMess title:"Quick Override Material"
			)
		)
		else
		(
			grayMode = curRender.options_overrideMtl_on == true
			if grayMode then
			(
				curRender.options_overrideMtl_on = false
				messageBox offMess title:"Quick Override Material"			
			)
			else
			(
				curRender.options_overrideMtl_on = true
				curRender.options_overrideMtl_mtl = mtlOverride
				messageBox onMess title:"Quick Override Material"
			)
		)
	)
	
	case curRenderClass of
	(
		"Corona": switchModeCorona()
		"Vray": switchModeVray()
		default: messageBox "Script can only supports Corona Renderer and V-Ray!" title:"Quick Override Material"
	)
)