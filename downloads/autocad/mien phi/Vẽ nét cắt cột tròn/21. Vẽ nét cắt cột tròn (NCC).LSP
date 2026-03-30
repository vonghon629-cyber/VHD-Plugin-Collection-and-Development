;;;************VEÞ NEìT CÃìT CÔòT TROÌN*************************
(Defun C:NCC (/ p1 p2 p3 p5 p11 p12 p13 l)
(setq dk (getreal "\nNhâòp ðýõÌng kiình:"))
(setq p (getpoint "\nChoòn ðiêÒm ðâÌu:"))
(setq pt2 (getpoint p "\nChoòn ðiêÒm cuôìi:"))
(setq l (distance p pt2))
(setq goc (angle p pt2))

(setq p1 (polar p (+ goc (/ pi 2.0)) (/ dk 2.0)))
(setq p2 (polar p1 goc l))
(setq p3 (polar p (- goc (/ pi 2.0)) (/ dk 2.0)))
(setq p4 (polar p3 goc l))
(setq p5 (polar p goc l))


(command "line" p1 p2 "")
(command "line" p3 p4 "")

(setq p11 (polar p5 (+ goc (/ pi 2.0)) (/ dk 4.0)))
(setq p11 (polar p11 goc (/ dk 8.0)))	
(setq p12 (polar p5 (- goc (/ pi 2.0)) (/ dk 4.0)))
(setq p12 (polar p12 goc (/ dk 8.0)))
(setq p13 (polar p12 (- pi goc) (/ dk 4.0)))	

(command "spline" p2 p11 p5 p13 p4 p12 p5 "" "" "")

)