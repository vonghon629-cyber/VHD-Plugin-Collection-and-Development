;;;************–√ÚT TI“ L Ú VIEWPORT TRONG LAYOUT*************************
(defun c:TL (/ zxp)
(if (setq zxp (getreal "Nh‚Úp ti“ lÍÚ Viewport: 1/..."))
(command "zoom" (strcat "1/" (rtos zxp 2 0) "xp")))
(princ))