macroScript coronaPhysicalToLegacy
Category:"D95 DESIGN" 
tooltip:"Corona Physical to Legacy"
buttontext:"PTL"
(
	try DestroyDialog PTL_converter catch()

	rollout PTL_converter "Corona PTL 1.08" width: 170 height: 225
	(	
		group "Materials"
		(
			checkbox ptlCrnPhysical "Corona Physical Material" checked: true
			checkbox ptlMaxPhysical "General Physical Material" checked: true
		)
		
		group "Settings"
		(
			dropdownList ptlMetalMode "Metalness mode" items:#("Autodetect", "Keep only IOR value") align:#center
			dropdownList ptlSelectMode "Thing to convert" items:#("Everything in scene", "Only selected objects", "Only selected materials") align:#center
		)
		
		button ptlStartConvert "Start Convert" width:150 height:30 align:#center offset:[0,1]
			
		fn getSelectedMat = 
		(
			viewNode = sme.GetView (sme.activeView)
			matArray = #()

			for n = 1 to trackViewNodes[#sme][(sme.activeView)].numSubs do try
			(
				m = trackViewNodes[#sme][(sme.activeView)][n].reference
				b = viewNode.GetNodeByRef m
				if b.selected do try append matArray m catch()
			)
			catch()

			try join matArray #(meditmaterials[activeMeditSlot]) catch()
			
			matArray
		)
		
		fn crnPtlConvert oldMat =
		(
			newMat = CoronaMtl()
			newMat.name = "PTL_" + oldMat.name
			
			--Diffuse
				--Level
					newMat.levelDiffuse = oldMat.baseLevel
				--Color
					newMat.colorDiffuse = oldMat.basecolor
					newMat.texmapDiffuse = oldMat.baseTexmap
				--Translucency
					--Fraction
						newMat.levelTranslucency = oldMat.translucencyFraction
						newMat.texmapTranslucencyFraction = oldMat.translucencyFractionTexmap
					--Color
						newMat.colorTranslucency = oldMat.translucencyColor
						newMat.texmapTranslucency = oldMat.translucencyColorTexmap
			--Reflection
				--Level
					newMat.levelReflect = 1
				--Color
					newMat.colorReflect = white
				--Glossiness
					if oldMat.roughnessMode == 1 then newMat.reflectGlossiness = oldMat.baseRoughness else newMat.reflectGlossiness = (1 - oldMat.baseRoughness)
				--Fresnel IOR
					if ptlMetalMode.selection == 1 then (if oldMat.metalnessMode == 0 then newMat.fresnelIor = oldMat.baseIor else newMat.fresnelIor = 999)
					else (newMat.fresnelIor = oldMat.baseIor)
			--Refraction
				--Level
					newMat.levelRefract = oldMat.refractionAmount
				--Color
					newMat.colorRefract = oldMat.thinAbsorptionColor
					newMat.texmapRefract = oldMat.thinAbsorptionTexmap
				--Gloss
				--IOR
			--Opacity
				--Level
					newMat.levelOpacity = oldMat.opacityLevel
				--Color
					newMat.colorOpacity = oldMat.opacityColor
					newMat.texmapOpacity = oldMat.opacityTexmap
			--Self illumination
				--Level
					newMat.levelSelfIllum = oldMat.selfIllumLevel
				--Color
					newMat.colorSelfIllum = oldMat.selfIllumColor
					newMat.texmapSelfIllum = oldMat.selfIllumTexmap
			--Displacement
				--Level
					newMat.displacementMinimum = oldMat.displacementMinimum
					newMat.displacementMaximum = oldMat.displacementMaximum
				--Textmap
					newMat.texmapDisplace = oldMat.displacementTexmap
			--Bump
				--Level
					newMat.texmapBump = oldMat.baseBumpTexmap

			newMat
		)
		
		fn maxPtlConvert oldMat = 
		(
			newMat = CoronaMtl()
			newMat.name = "PTL_" + oldMat.name
			
			--Diffuse
				--Level
					newMat.levelDiffuse = oldMat.base_weight
				--Color
					newMat.colorDiffuse = oldMat.base_color
					newMat.texmapDiffuse = oldMat.base_color_map
				--Translucency
					--Fraction
						newMat.levelTranslucency = oldMat.scattering
					--Color
						newMat.colorTranslucency = oldMat.sss_color
						newMat.texmapTranslucency = oldMat.sss_color_map
			--Reflection
				--Level
					newMat.levelReflect = oldMat.reflectivity
				--Color
					newMat.colorReflect = oldMat.refl_color
				--Glossiness
					if oldMat.roughness_inv == on then newMat.reflectGlossiness = oldMat.roughness else newMat.reflectGlossiness = (1 - oldMat.roughness)
				--Fresnel IOR
					newMat.fresnelIor = oldMat.trans_ior
			--Refraction
				--Level
					newMat.levelRefract = oldMat.transparency
				--Color
					newMat.colorRefract = oldMat.trans_color
					newMat.texmapRefract = oldMat.trans_color_map
				--Gloss
				--IOR
			--Opacity
				--Level
-- 					newMat.levelOpacity = oldMat.opacityLevel
				--Color
-- 					newMat.colorOpacity = oldMat.opacityColor
-- 					newMat.texmapOpacity = oldMat.opacityTexmap
			--Self illumination
				--Level
-- 					newMat.levelSelfIllum = oldMat.selfIllumLevel
				--Color
-- 					newMat.colorSelfIllum = oldMat.selfIllumColor
-- 					newMat.texmapSelfIllum = oldMat.selfIllumTexmap
			--Displacement
				--Level
-- 					newMat.displacementMinimum = oldMat.displacementMinimum
-- 					newMat.displacementMaximum = oldMat.displacementMaximum
				--Textmap
					newMat.texmapDisplace = oldMat.displacement_map
			--Bump
				--Level
					newMat.texmapBump = oldMat.bump_map

			newMat
		)

		fn ptlReplace oldMat = if oldMat != undefined then case classOf oldMat of
		(
			CoronaPhysicalMtl: if ptlCrnPhysical.state then replaceInstances oldMat (crnPtlConvert oldMat)
			PhysicalMaterial: if ptlMaxPhysical.state then replaceInstances oldMat (maxPtlConvert oldMat)
			Multimaterial: for mat in oldMat.materialList do ptlReplace mat
		)
		
		on ptlStartConvert pressed do if (ptlCrnPhysical.state == false and ptlMaxPhysical.state == false) then messageBox "Please select atleast a material type!" else
		(
			case ptlSelectMode.selection of
			(
				1: 
				(
					savePath = (GetDir #temp) + @"\tempPTL.max"
					saveNodes #() savePath
					deleteFile savePath
					for mat in sceneMaterials do ptlReplace mat
				)
				2: for obj in selection do ptlReplace obj.material
				3: for mat in getSelectedMat() do ptlReplace mat
			)
			messageBox "Done!" title:"Convert"
		)
	)

	createDialog PTL_converter
)