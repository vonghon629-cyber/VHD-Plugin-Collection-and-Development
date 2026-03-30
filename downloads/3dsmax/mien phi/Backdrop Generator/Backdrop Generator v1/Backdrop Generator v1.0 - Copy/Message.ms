macroscript BackdropGenerator
category: "ArchvizTools"
tooltip: "Backdrop Generator"
buttontext: "Backdrop Generator"
icon: #("Backdrop_Generator",1)

(
	on Execute do
	fileIn ((getDir #scripts)+@"\Backdrop Generator\Backdrop Generator.mse") quiet:true
)



messageBox "Backdrop Generator v1.0 has now been installed!
\n\nTo set it up go to:
\n1/ Run 3dsMax as administrator
\n2/ Menu-> Customize -> Customize Interface... -> Toolbars
\n3/ Category: 'ArchvizTools' and drag 'Backdrop Generator' to a toolbar.
\n4/ Click the toolbar icon to run the script.
\n\n---
\n© ArchvizTools" title:"Script installer message" beep: false
