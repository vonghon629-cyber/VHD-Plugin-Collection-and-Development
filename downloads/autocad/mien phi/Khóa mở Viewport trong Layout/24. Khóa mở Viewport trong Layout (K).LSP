;;;************KHOìA MÕÒ VIEWPORT TRONG LAYOUT*************************
(defun C:K ( / SelSet ST:VP-Toggle-DisplayLocked) ;VP toggle Locked
;======== Local Function =========
(defun ST:VP-Toggle-DisplayLocked (vpObj / rt)
;vp : vlaObject
;RT : T if Lock VP / nil if Open
(cond ((eq (vla-get-DisplayLocked vpObj) :vlax-false)(vla-put-DisplayLocked vpObj :vlax-true)(setq rt T)(vla-put-color vpObj acMagenta))
		(T (vla-put-DisplayLocked vpObj :vlax-False)(vla-put-color vpObj acByLayer)))
)
;========== Start Here ==============
(grtext -1 "Khoìa hoãòc mõÒ khoìa Viewport trong Layout!")
 (cond
  ((< (atof (getvar "ACADVER")) 15.0)
   (alert " Lisp yêu câÌu týÌ AutoCAD 2000 hoãòc cao hõn!")
  )
  ((or (= (getvar "TILEMODE") 1) (> (getvar "CVPORT") 1))
   (alert "Lisp chiÒ coì thêÒ ðýõòc thýòc hiêòn trong không gian giâìy!")
  )
  ((and
    (not (prompt "\nChoòn Viewport ðêÒ mõÒ hoãòc khoìa!"))
    (not (setq SelSet (ssget '((0 . "VIEWPORT")))))
   )
   (princ "Ðôìi týõòng baòn choòn không phaÒi Viewport!")
  )
  (T
   (vl-load-com)
   (vlax-for vpObj (setq SelSet (vla-get-ActiveSelectionSet (vla-get-ActiveDocument (vlax-get-acad-object))))
	 (ST:VP-Toggle-DisplayLocked vpObj)	 
    )
	)
 )
 (princ)
)