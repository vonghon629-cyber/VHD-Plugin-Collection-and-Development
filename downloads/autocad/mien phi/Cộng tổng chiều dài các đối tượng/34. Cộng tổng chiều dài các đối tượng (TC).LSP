;;;************C‘ÚNG T‘“NG CHI ÃU DAÃI CAÏC –‘ÏI T›’ÚNG*************************
(defun Length1(e) (vlax-curve-getDistAtParam e (vlax-curve-getEndParam e)))
(defun C:TC( / ss L e)
(setq
ss (ssget (list (cons 0 "LINE,ARC,CIRCLE,POLYLINE,LWPOLYLINE,ELLIPSE,SPLINE")))
L 0.0
)
(vl-load-com)
(while (setq e (ssname ss 0))
(setq L (+ L (length1 e)))
(ssdel e ss)
)
(alert (strcat "TÙ“ng chiÍÃu daÃi laÃ: " (rtos L)))
)