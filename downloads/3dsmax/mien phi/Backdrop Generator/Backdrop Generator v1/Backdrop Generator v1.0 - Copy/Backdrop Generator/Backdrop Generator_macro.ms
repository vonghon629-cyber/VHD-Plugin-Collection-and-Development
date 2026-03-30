macroscript BackdropGenerator
category: "ArchvizTools"
tooltip: "Backdrop Generator"
buttontext: "Backdrop Generator"
icon: #("Backdrop_Generator",1)

(
	on Execute do
	fileIn ((getDir #scripts)+@"\Backdrop Generator\Backdrop Generator.mse") quiet:true
)
