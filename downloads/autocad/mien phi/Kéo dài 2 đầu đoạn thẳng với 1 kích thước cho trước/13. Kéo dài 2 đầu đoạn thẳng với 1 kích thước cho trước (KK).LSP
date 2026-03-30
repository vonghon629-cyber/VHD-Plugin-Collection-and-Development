;;;************KEìO DAÌI HAI ĞÂÌU ĞOAòN THÃÒNG VÕìI 1 KIìCH THİÕìC CHO TRİÕìC***********************
(defun c:KK (/ ss kc)  (vl-load-com)   
	(setq 	ss (ssget "_:L" '((0 . "LINE,LWPOLYLINE,ARC")))            
			kc (getdist "\nChiêÌu daÌi phâÌn ğıa ra:"))      
			(foreach ent 
				(vl-remove-if 'listp (mapcar 'cadr (ssnamex ss)))         
					(command "_.lengthen" "_delta" kc                 
					(list ent (vlax-curve-getendpoint ent)) 
					(list ent (vlax-curve-getstartpoint ent)) ""        
					) ;kthuc command      
			) ; kthuc vong lap 
(princ))