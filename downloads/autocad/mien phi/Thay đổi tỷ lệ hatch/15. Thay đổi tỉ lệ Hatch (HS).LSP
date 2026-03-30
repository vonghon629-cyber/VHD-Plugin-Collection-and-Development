;;;************THAY ĞÔÒI TIÒ LÊò MÂŞU HATCH*************************
(defun c:HS	()
(setq ename	(entsel "\nLıòa choòn mâŞu Hatch ğêÒ thay ğôÒi tyÒ lêò:")
elist (entget (car ename))
etyp	(cdr (assoc 0 elist))
oscl (assoc 41 elist)
);setq

(if (/= etyp "HATCH")
(prompt "\nKhông phaÒi ğôìi tıõòng Hatch! HaŞy thıÒ laòi!")
(progn
(setq hscl (getreal (strcat "\nTyÒ lêò mâŞu Hatch mõìi: <" (rtos (cdr oscl) 2) ">"))
nscl (cons 41 hscl)
nlst (subst nscl oscl elist)
)
(entmod nlst)
(command "hatchedit" ename "" "" "" "")
);progn
);if
(princ)
);defun