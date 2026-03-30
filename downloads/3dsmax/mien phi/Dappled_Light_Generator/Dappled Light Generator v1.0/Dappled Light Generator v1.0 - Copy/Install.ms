macroscript DappledLightGenerator
category: "ArchvizTools"
tooltip: "Dappled Light Generator"
buttontext: "Dappled Light Generator"
icon: #("DLG_Icon",1)
(
	on Execute do
	try(fileIn ((getDir #scripts)+@"\Dappled Light Generator\Dappled Light Generator.mse") quiet:true)catch()
)
colorman.reInitIcons()

