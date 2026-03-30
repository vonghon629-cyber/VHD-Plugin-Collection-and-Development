;;;************ÂÒN - HIÊòN TİÌNG ĞÔìI TİÕòNG*************************
(defun c:A1 (/ SSet Count Elem)
  
  (defun Dxf (Id Obj)
    (cdr (assoc Id (entget Obj)))
  );end Dxf
  
  (prompt "\nChoòn caìc ğôìi tıõòng ğêÒ âÒn: ")
  (cond
    ((setq SSet (ssget))
     (repeat (setq Count (sslength SSet))
       (setq Count (1- COunt)
	     Elem (ssname SSet Count))
       (if (/= 4 (logand 4 (Dxf 70 (tblobjname "layer" (Dxf 8 Elem)))))
	 (if (Dxf 60 Elem)
	   (entmod (subst '(60 . 1) (assoc 60 (entget Elem)) (entget Elem)))
	   (entmod (append (entget Elem) (list '(60 . 1))))
	 )
	 (prompt "\nLayer ğaŞ biò khoìa! Không thêÒ âÒn ğôìi tıõòng naÌy! ")
       );end if
     );end repeat
    )	 	
  );end cond
  (princ)
);end c:InVis



(defun c:A2 (/ WhatNextSSet Count Elem)

  (defun Dxf (Id Obj)
    (cdr (assoc Id (entget Obj)))
  );end Dxf

 (cond
  ((setq SSet (ssget "_X" '((60 . 1))))
   (initget "Yes No")
   (setq WhatNext (cond
		   ((getkword "\nBaòn coì muôìn hiêÒn thiò tâìt caÒ caìc ğôìi tıõòng ğaŞ biò âÒn? Nhâòp: Y/N: "))
		   (T "Yes")))
   (cond
   ((= WhatNext "Yes")
    (prompt "\nVui loÌng ğõòi...")
     (repeat (setq Count (sslength SSet))
       (setq Count (1- COunt)
	     Elem (ssname SSet Count))
       (if (/= 4 (logand 4 (Dxf 70 (tblobjname "layer" (Dxf 8 Elem)))))
	 (entmod (subst '(60 . 0) '(60 . 1) (entget Elem)))
	 (prompt "\nLayer ğaŞ biò khoìa! Không thêÒ hiêÒn thiò ğôìi tıõòng naÌy! ")
       );end if
     );end repeat
    (prompt "\nDone...")
    )
   );end cond
  )
  (T (prompt "\nKhông coì ğôìi tıõòng naÌo biò âÒn! "))
 )
)