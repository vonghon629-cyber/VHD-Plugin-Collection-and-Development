;;;************CHUY “N T›Ã MODEL SANG LAYOUT*************************
(defun c:C()
    (if (= (getvar "tilemode") 0)
        (setvar "tilemode" 1)
        (setvar "tilemode" 0)
    )
    (princ)
)