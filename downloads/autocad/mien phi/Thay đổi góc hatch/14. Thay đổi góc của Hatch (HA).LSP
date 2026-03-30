;;;************THAY ĞÔÒI GOìC CUÒA HATCH*************************
(defun c:HA	()
(setq ename(entsel "\nLıòa choòn mâŞu Hatch ğêÒ thay ğôÒi goìc!")
elist(entget (car ename))
etyp(cdr (assoc 0 elist))
oang(assoc 52 elist)
);setq

(if (/= etyp "HATCH")
(prompt "\nKhông phaÒi ğôìi tıõòng Hatch! HaŞy thıÒ laòi!")
(progn
(setq ang (getangle (strcat "\nSôì ğo goìc mõìi: <" (rtos (cdr oang) 2) ">"))
nang (cons 52 ang)
nlst (subst nang oang elist)
)
(entmod nlst)
(command "hatchedit" ename "" "" "" "")
);progn
);if
(princ)
);defun