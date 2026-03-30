;;;************SAO CHEìP TEXT BLOCK ATTRIBUTE THEO SÔì THİì Tİò TÃNG DÂÌN*************************
;;;-------------------------------------------------
(defun etype (e) ;;;Entity Type
(cdr (assoc 0 (entget e)))
)
;;;-------------------------------------------------
(defun wtxt (txt p / sty d h) ;;;Write txt on graphic screen, defaul setting
(setq
   sty (getvar "textstyle")
   d (tblsearch "style" sty)
   h (cdr (assoc 40 d))
)
(if (= h 0) (setq h (cdr (assoc 42 d))))
(entmake
   (list (cons 0 "TEXT") (cons 7 sty) (cons 1 txt) (cons 10 p) (cons 40 h) (assoc 41 d))
)
)
;;;-------------------------------------------------
(defun incN (n dn / n2 i n1) ;;;Increase number n
(setq
   n2 (itoa (+ dn (atoi n)))
   i (- (strlen n) (strlen n2))
)
(if (> i 0) (setq n1 (substr n 1 i)) (setq n1 ""))
(strcat n1 n2)
)
;;;-------------------------------------------------
(defun incC (c / i c1 c2) ;;;Increase character c
(setq
   i (strlen c)
   c1 (substr c 1 (- i 1))
   c2 (chr (1+ (ascii (substr c i 1))))
)
(if (or (= c2 "{") (= c2 "["))
   (progn (command "erase" (entlast) "") (alert "Over character!") (exit))
   (strcat c1 c2)
)
)
;;;============================
(defun C:CSS( / e e0 dn p1 cn c n p2 dat) ;;;Make Ordinal number. Copy from Atttribute block
(setq
   e0 (car (entsel "\nChoòn ğôìi tıõòng Block Attribute:"))
   e (entnext e0)
)
(if (/= (etype e) "ATTRIB") (progn (alert "Ğôìi tıõòng baòn choòn không phaÒi Block Attribute!") (exit)))
(setq
   p1 (getpoint "\nChoòn ğiêÒm bãìt ğâÌu:")
   cn (cdr (assoc 1 (entget e)))
)
(if (not dn) (setq dn 1))
(if (= cn "") (setq cn "1"))
(setq
   c (vl-string-right-trim "0 1 2 3 4 5 6 7 8 9" cn)
   n (vl-string-subst "" c cn)
)
(while (setq p2 (getpoint p1 "\nChoòn ğiêÒm tiêìp theo:"))
   (command "copy" e0 "" p1 p2)
   (if (= n "") 
       (setq cn (incC cn))
       (setq cn (strcat c (incN (vl-string-subst "" c cn) dn)))        
   )
   (setq
       dat (entget (entnext (entlast)))
       dat (subst (cons 1 cn) (assoc 1 dat) dat)
   )
   (entmod dat)
   (command "regen")
)
(princ)
)