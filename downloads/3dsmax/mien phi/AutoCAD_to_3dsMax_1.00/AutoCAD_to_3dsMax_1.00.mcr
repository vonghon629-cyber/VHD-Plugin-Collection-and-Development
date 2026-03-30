macroScript PasteFromAutoCAD
category:"D95 DESIGN"
tooltip:"Paste from AutoCAD"
buttontext:"PFA"
(
	tempDWG = #()
	join tempDWG (getFiles ((sysInfo.tempdir as string) + "*.DWG"))
		
	infoDWG = #{}
	infoDWG = for k = 1 to tempDWG.count collect #(k, tempDWG[k], (dotnetobject "System.IO.FileInfo" tempDWG[k]).LastWriteTime)

	fn sortByDateTime v1 v2 = -(v1[3].Compare v1[3] v2[3])
	qsort infoDWG sortByDateTime

	try importFile(infoDWG[1])[2] #noPrompt catch ()
)