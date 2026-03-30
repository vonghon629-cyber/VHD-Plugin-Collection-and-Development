;;;************TIìNH DIÊòN TIìCH VUÌNG HATCH*************************
(defun c:TDT (/ lst msp pt ss lay ar txtsiz)
  (vl-load-com)  
  (if (setq ss (ssget(list (cons 0 "HATCH"))))
    (progn
      (foreach e (mapcar 'vlax-ename->vla-object(vl-remove-if 'listp (mapcar 'cadr (ssnamex ss))))
        (setq lay (vla-get-layer e) ar (vla-get-area e))
        (if (not (assoc lay lst))
          (setq lst (cons (cons lay ar) lst))
          (setq lst (subst (cons lay (+ ar (cdr (assoc lay lst))))
                           (assoc lay lst) lst)))      )
      (setq lst (vl-sort lst '(lambda (x y) (< (car x) (car y))))
			tl 0.000001
            pt (getpoint "\nChoòn ðiêÒm ðãòt kêìt quaÒ:" )
            txtsiz (* (getvar "dimtxt")(getvar "dimscale"))
            msp (vla-get-modelspace (vla-get-activedocument (vlax-get-acad-object))))
      (foreach e lst
        (vla-addtext msp (car e) (vlax-3d-point pt) txtsiz )
        (vla-addtext msp 
		(strcat (rtos (* (cdr e) tl) 2 2) " m2") (vlax-3d-point (polar pt 0 (* 10 txtsiz))) txtsiz )
        (setq pt (polar pt (/ pi -2) (* 1.5 txtsiz)))  )      )
    (alert "Không choòn ðýõòc vuÌng Hatch!")    )
  (princ))