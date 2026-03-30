(defun c:rrt (/ ss num x ang ename elist pnt)
  (command "UNDO" "GROUP")
  (setq ss (ssget "_I"))
  (if (not ss) (setq ss (ssget)))
  (if ss
    (progn
      (setq num (sslength ss))
      (setq x 0)
      (repeat num
        (setq ang (* 180 (LM:rand)))
        (setq ename (ssname ss x))
        (setq elist (entget ename))
        (setq pnt (cdr(assoc 10 elist)))
        (command "Rotate" ename "" pnt ang)
        (setq x (1+ x))
      )
    )
  )
  (command "UNDO" "END")
  (princ)
)

(defun LM:rand (/ a c m)
  (setq m 4294967296.0
        a 1664525.0
        c 1013904223.0
        $xn (rem (+ c (* a (cond ($xn) ((getvar 'date))))) m))
  (/ $xn m)
)
