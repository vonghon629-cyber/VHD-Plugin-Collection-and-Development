/* =====================================================
   PluginVault — Main Application JS
   ===================================================== */

// ==================== Plugin Data ====================
const pluginsData = {
    '3dsmax': [
        { name: 'collect_asset_v2.099f', version: 'v2.099f', size: '0.75 MB', file: 'collect_asset_v2.099f/collect_asset_v2.099f.mzp', compat: 'Mọi phiên bản', icon: '📦', price: 0, desc: 'Công cụ đóng gói Asset siêu tốc cho 3ds Max.', driveLink: 'https://drive.google.com/drive/folders/1qN7lShIjFEkFYa19a7H5brydjzenTuYf?usp=drive_link' },
        { name: 'copypro v7', version: 'v7', size: '0.33 MB', file: 'copypro v7/copypro v7.mzp', compat: 'Mọi phiên bản', icon: '📋', price: 0, desc: 'Copy Paste qua lại giữa các file 3ds Max nhanh chóng.', driveLink: 'https://drive.google.com/drive/folders/10_Gk2mRyQUz47Hjq5l0BTQV5jXYU2T6q?usp=drive_link' },
        { name: 'copypro v8', version: 'v8', size: '0.33 MB', file: 'copypro v8/copypro v8.mzp', compat: 'Mọi phiên bản', icon: '📋', price: 0, desc: 'Phiên bản cải tiến Copy Paste qua lại file 3ds Max.', driveLink: 'https://drive.google.com/drive/folders/1GOrYJC5a_BeJ1gRhsm3dyM-pUnfw8ZMU?usp=drive_link' },
        { name: 'Dim 3d D95', version: '1.0', size: '0.08 MB', file: 'Dim 3d/Smart.Measure.v1.12-2016-2024-iTooHelper.mzp', compat: '2016 - 2024', icon: '📏', price: 0, desc: 'Plugin hỗ trợ Dimension trực tiếp trong môi trường 3D.', driveLink: 'https://drive.google.com/drive/folders/1UHOoDFLUD0FNHRd8CqOxVsQtWRIWx2m2?usp=drive_link' },
        { name: 'Corona Quick Setup D95', version: '1.05', size: '0.02 MB', file: 'Corona Quick Setup 1.05/Corona Quick Setup 1.05.mzp', compat: '2016 - 2025', icon: '☀️', price: 0, desc: 'Setup setting Corona Renderer nhanh chỉ với 1 click.', driveLink: 'https://drive.google.com/drive/folders/1DsGpZiCQgLcYO8EhanrOuwJUFY1S6z1W?usp=drive_link' },
        { name: 'Corona Physical To Legacy D95', version: '1.08', size: '0.01 MB', file: 'Corona_Physical_To_Legacy_1.08/Corona_Physical_To_Legacy_1.08.mcr', compat: 'Mọi phiên bản', icon: '🔄', price: 0, desc: 'Chuyển đổi vật liệu Physical sang Legacy trong Corona mượt mà.', driveLink: 'https://drive.google.com/drive/folders/1CT5sxXLTQ4bxHNImHAIJkczbeSGmC3AE?usp=drive_link' },
        { name: 'Smart Camera View D95', version: '2.99', size: '0.22 MB', file: 'Smart_Camera_View_2.99_ZZ15A4D2OQK/Smart_Camera_View_2.99_ZZ15A4D2OQK.mzp', compat: '2016 - 2025', icon: '📷', price: 0, desc: 'Quản lý Camera siêu thông minh trong 3ds Max.', driveLink: 'https://drive.google.com/drive/folders/1HbdkgeZ0x9Hma91ElR7kR74wxXWFbhmn?usp=drive_link' },
        { name: 'AutoCAD to 3dsMax D95', version: '1.00', size: '0.01 MB', file: 'AutoCAD_to_3dsMax_1.00/AutoCAD_to_3dsMax_1.00.mcr', compat: 'Mọi phiên bản', icon: '🔄', price: 0, desc: 'Công cụ xuất chuẩn bản vẽ AutoCAD sang 3ds Max.', driveLink: 'https://drive.google.com/drive/folders/1UDIJB-pnXMhITp5Zqnqzc-H_QuQZo9oK?usp=drive_link' },
        { name: 'Auto Material D95', version: 'v1.99a', size: '2.2 MB', file: 'Auto.Material.v1.99a-2016-2024/Auto.Material.v1.99a-2016-2024-iTooHelper.mzp', compat: '2016 - 2024', icon: '🎨', price: 0, desc: 'Tự động gán vật liệu siêu tốc.', driveLink: 'https://drive.google.com/drive/folders/1J-jAfA9EBeKQPP2Gmync5EwQUouMofJb?usp=drive_link' },
        { name: 'Auto Light D95', version: 'v1.74', size: '0.14 MB', file: 'Auto.Light.v1.74-2016-2025/Auto.Light.v1.74-2016-2025-iTooHelper.mzp', compat: '2016 - 2025', icon: '💡', price: 0, desc: 'Tạo hàng loạt đèn tự động.', driveLink: 'https://drive.google.com/drive/folders/1mEW-k9kHueDhUG9q_GcWNnCc0J4l2Kfv?usp=drive_link' },
        { name: 'Chỉnh tâm pivot', version: '1.0', size: '0.01 MB', file: 'Chỉnh tâm pivot/AutoPivot_Center_v1.2.mzp', compat: 'Mọi phiên bản', icon: '🎯', price: 0, desc: 'Đưa tâm Pivot về giữa nhanh chóng đối tượng.', driveLink: 'https://drive.google.com/drive/folders/1PbKB_yUTXQ25i2gQTDQpZ3WwsG1F9LKp?usp=drive_link' },
        { name: 'UV Tools 3.2k', version: '3.2k', size: '0.81 MB', file: 'Uv tool 3.2k/UVTools_3.2k.mzp', compat: '2016 - 2025', icon: '🗺️', price: 0, desc: 'Bộ công cụ Map UV cực mạnh mẽ.', driveLink: 'https://drive.google.com/drive/folders/1MCi1n37gAd9Z0QUnKH2Jryj0QI6b-pxO?usp=drive_link' },
        { name: 'UV Tools 3.2m', version: '3.2m', size: '0.85 MB', file: 'UVTools 3.2m/UVTools_3.2m.mzp', compat: '2016 - 2025', icon: '🗺️', price: 0, desc: 'Bộ công cụ Map UV bản cập nhật mới.', driveLink: 'https://drive.google.com/drive/folders/1eF2Xi_sYtA5vfhUWFscCWeXMaR3a8FqP?usp=drive_link' },
        { name: 'Unwrap Pro Max 2018-2024', version: 'Pro', size: '119.34 MB', file: 'Unwrap Pro Max 2018 - 2024/Unwrap Pro Max 2018 - 2024.rar', compat: '2018 - 2024', icon: '📦', price: 0, desc: 'Plugin Unwrap tự động và tối ưu lưới đa giác chuyên nghiệp.', driveLink: 'https://drive.google.com/drive/folders/13S4TJZR6VRfsanQw9ykmClng03PpMX33?usp=drive_link' },
        { name: 'FloorGenerator & MultiTexture', version: '1.0', size: '1.88 MB', file: 'FloorGenerator and MultiTexture 2013-2025/FloorGenerator and MultiTexture.rar', compat: '2013 - 2025', icon: '🧱', price: 0, desc: 'Tạo sàn ốp lát gạch gỗ tự động.', driveLink: 'https://drive.google.com/drive/folders/1ihgI0gTtXLFUTN1KnxnQgNuLLkrEJeo3?usp=drive_link' },
        { name: 'Divide Clone D95', version: 'v1.00', size: '0.03 MB', file: 'Divide.Clone.v1.00-2016-2025/Divide.Clone.v1.00-2016-2025.mzp', compat: '2016 - 2025', icon: '✂️', price: 0, desc: 'Chia khoảng cách sao chép cực kỳ chuẩn xác.', driveLink: 'https://drive.google.com/drive/folders/1rv4fRMNq2P2oB-x4nXKcbibV3JgqUbqR?usp=drive_link' },
        { name: 'Quick Attach Detach D95', version: '1.03', size: '0.01 MB', file: 'Quick_Attach_Detach/Quick_Attach_Detach_1.03.mcr', compat: 'Mọi phiên bản', icon: '🔗', price: 0, desc: 'Lệnh gộp và tách đối tượng cực nhanh.', driveLink: 'https://drive.google.com/drive/folders/1tZr0o4VUSWH6z31AQw6d-JLZvuVLIfY1?usp=drive_link' },
        { name: 'Sculpt Tool', version: 'v1.0', size: '0.19 MB', file: 'Sculpt Tool v1.0 for 3ds Max/sculptTool_v1.0-2023.mzp', compat: '2016 - 2023', icon: '🗿', price: 0, desc: 'Nặn tượng, vuốt mặt ngay trên lưới Poly.', driveLink: 'https://drive.google.com/drive/folders/1NgoIMaNw-R2_M7-8oNZKZcXBBPAlERAc?usp=drive_link' },
        { name: 'rapidToolsInstaller', version: 'v1.14', size: '0.28 MB', file: 'rapidToolsInstaller_v1.14/rapidToolsInstaller_v1.14.mzp', compat: '2016 - 2025', icon: '🚀', price: 0, desc: 'Gói cài đặt rapidTools cực hữu dụng.', driveLink: 'https://drive.google.com/drive/folders/1HW_ZNi4qI2jECjEnTILlbSXffRuNDgx3?usp=drive_link' },
        { name: 'Set khổ ảnh theo góc cam', version: '1.0', size: '0.01 MB', file: 'Set khổ ảnh theo góc cam/CameraResolutionMod.mse', compat: 'Mọi phiên bản', icon: '🖼️', price: 0, desc: 'Tự động đổi kích thước render theo tỷ lệ cam.', driveLink: 'https://drive.google.com/drive/folders/1t0XWREsQgp_IVN0lFiPy4qu867pStTXQ?usp=drive_link' },
        { name: 'Quick Boolean D95', version: '1.10', size: '0.01 MB', file: 'Quick+Boolean+1.10+upto+3dsMax+2025/Quick.Boolean.v1.10-2016-2024-iTooHelper.mzp', compat: '2016 - 2025', icon: '🔪', price: 0, desc: 'Công cụ Boolean đục lỗ cực sạch lưới và nhanh cắt.', driveLink: 'https://drive.google.com/drive/folders/18WxfguOf7SyR8m-0Tn8geGEqYurM08Wn?usp=drive_link' },
        { name: 'Smart Merge D95', version: '2.19', size: '1.42 MB', file: 'Smart Merge 2.19/Smart.Merge.v2.19-2016-2024.mzp', compat: '2016 - 2024', icon: '➕', price: 0, desc: 'Trộn / Merge các file 3D thông minh vào ngữ cảnh.', driveLink: 'https://drive.google.com/drive/folders/1WJAGnpgYcrgf3eqgKjsSEjsci5ZKA8pB?usp=drive_link' },
        { name: 'Hiệu ứng nứt vỡ gạch', version: '1.52', size: '0.02 MB', file: 'Hiệu ứng nứt vỡ gạch/PolyDesign3D_PolyDamage_1.52.rar', compat: '2016 - 2025', icon: '💥', price: 0, desc: 'Thêm sát thương, nứt vỡ (PolyDamage) cho vật thể.', driveLink: 'https://drive.google.com/drive/folders/1Qll1uh8lAyPgNQJa-bQbcL6z4Wc-Xskt?usp=drive_link' },
        { name: 'Dọn dẹp diệt virus', version: '1.0', size: '0.3 MB', file: 'dọn dẹp diệt virus/PruneScene.mzp', compat: '2016 - 2025', icon: '🛡️', price: 0, desc: 'Plugin PruneScene quét dọn tệp rác và virus CRP.', driveLink: 'https://drive.google.com/drive/folders/1jWLjlUTt3oomL7M_hPFwwA_XGuZWa2b6?usp=drive_link' },
        { name: 'Làm tròn boder', version: '2.01', size: '0.01 MB', file: 'Làm tròn boder/regularizeedgeloop_rev2.01.ms', compat: 'Mọi phiên bản', icon: '⭕', price: 0, desc: 'Tạo Edge Loop hình nón mượt mà.', driveLink: 'https://drive.google.com/drive/folders/1b66E_C1jwxE3jzlhgghTulOdrBG7OtE9?usp=drive_link' },
        { name: 'Path Deform Pro', version: '1.01', size: '0.44 MB', file: 'Path_Deform_Pro_1.01/Path Deform Pro.dlm', compat: '2016 - 2025', icon: '〰️', price: 0, desc: 'Uốn cong và đưa đối tượng dọc theo đường path spline cao cấp.', driveLink: 'https://drive.google.com/drive/folders/1Me8jup6gmavoV_OvNm6Kkft1vIAD8HuJ?usp=drive_link' },
        { name: 'Quad Cap Pro', version: '1.01', size: '0.11 MB', file: 'Quad_Cap_Pro_1.01/Quad Cap Pro.dlm', compat: '2016 - 2025', icon: '🔲', price: 0, desc: 'Vá lỗ thủng Border trên Poly bằng Quad tự động rất đẹp mặt.', driveLink: 'https://drive.google.com/drive/folders/1GF3GsdDdwjTHrRlFRhLVCzynRJk6Ii2R?usp=drive_link' },
        { name: 'Backdrop Generator', version: '1.0', size: '74.23 MB', file: 'Backdrop Generator/Backdrop Generator v1.0 - Copy.zip', compat: '2016 - 2025', icon: '🖼️', price: 0, desc: 'Tạo phông nền (Backdrop) studio chụp sản phẩm tự động trong 3ds Max.', driveLink: 'https://drive.google.com/drive/folders/18DDp4RmWwwkoK1InHNiX_JARhpklok8W?usp=drive_link' },
        { name: 'BDGen2', version: '2.0', size: '0.5 MB', file: 'BDGen2/BDGen2.mzp', compat: '2016 - 2025', icon: '🖼️', price: 0, desc: 'Backdrop Generator phiên bản 2 cải tiến.', driveLink: 'https://drive.google.com/drive/folders/16os0dVZEgnlNPcD4tPGPJdu7Ku05IJqP?usp=drive_link' },
        { name: 'Dappled Light Generator', version: '1.0', size: '17.89 MB', file: 'Dappled_Light_Generator/Dappled Light Generator v1.0 - Copy.zip', compat: '2016 - 2025', icon: '🌤️', price: 0, desc: 'Tạo hiệu ứng ánh sáng lốm đốm xuyên qua tán lá cây cực thực tế.', driveLink: 'https://drive.google.com/drive/folders/1iOGqi2D_3BJDYuHs6daUfVXlXQ8ZlP-6?usp=drive_link' },
        { name: 'FloorGen Tools', version: '1.5.1', size: '0.04 MB', file: 'FloorGen Tools/FloorGen Tools 1.5.1.mzp', compat: '2016 - 2025', icon: '🧱', price: 0, desc: 'Công cụ tạo sàn gạch ốp lát nâng cao với nhiều pattern tùy biến.', driveLink: 'https://drive.google.com/drive/folders/1zrNcJEDB2-faHmBkVwN2H_HkjIEgheKm?usp=drive_link' },
        { name: 'Maps Cleaner', version: '2.3', size: '20.24 MB', file: 'Maps Cleaner v2.3/How to use.mp4', compat: '2016 - 2025', icon: '🧹', price: 0, desc: 'Dọn dẹp texture map thừa, bitmap lỗi và tối ưu dung lượng file.', driveLink: 'https://drive.google.com/drive/folders/1Y1fwVGZFt6Ua4IB6xNR9-SHzHhfgEv9-?usp=drive_link' },
        { name: 'Material Quick Override', version: '1.02', size: '0.01 MB', file: 'Material Quick Override/Material_Quick_Override_1.02.mcr', compat: 'Mọi phiên bản', icon: '🎨', price: 0, desc: 'Override vật liệu toàn cảnh bằng 1 click để render Clay/AO nhanh.', driveLink: 'https://drive.google.com/drive/folders/17RdlaF60k5Eyzpfizxenrk3DV2Ksnut1?usp=drive_link' },
        { name: 'MiliStudio Quick AO', version: '1.0', size: '1.34 MB', file: 'MiliStudio Quick AO/MiliStudioQuickAO.mzp', compat: '2016 - 2025', icon: '🔘', price: 0, desc: 'Render Ambient Occlusion siêu nhanh chỉ 1 click từ MiliStudio.', driveLink: 'https://drive.google.com/drive/folders/1UqgptCZT_uGstt8I49enBVwBcr9TvXak?usp=drive_link' },
        { name: 'MiliStudio Quick Round CRN', version: '1.0', size: '0.1 MB', file: 'MiliStudio Quick Round CRN/MiliStudioQuickRoundCRN.mzp', compat: '2016 - 2025', icon: '⭕', price: 0, desc: 'Bo tròn cạnh Corona Renderer nhanh gọn với Round Edge Map.', driveLink: 'https://drive.google.com/drive/folders/1Jn0mrnEoorQvTPS0_X8tJ7qkk1RvZ9pj?usp=drive_link' },
        { name: 'Smart Camera View D95', version: '3.93', size: '0.14 MB', file: 'Smart Camera View 3.93/Smart.Camera.View.v3.93-2016-2024-iTooHelper.mzp', compat: '2016 - 2024', icon: '📷', price: 0, desc: 'Quản lý Camera View thông minh phiên bản mới nhất v3.93.', driveLink: 'https://drive.google.com/drive/folders/1lrLPp1VgmmqRKP3nJoA25ZScmh-u0oQp?usp=drive_link' },
        { name: 'UV Pack Master', version: '1.0', size: '2.67 MB', file: 'UV Pack Master/uvpackmaster-max2019.dlm', compat: '2019 - 2025', icon: '🗺️', price: 0, desc: 'Đóng gói UV islands tối ưu không gian tự động siêu chính xác.', driveLink: 'https://drive.google.com/drive/folders/1fKjyBB4TxxbNTiPwzwogcvIDBOqeaDvC?usp=drive_link' },
        { name: 'VertexCleaner', version: '1.0', size: '0.01 MB', file: 'VertexCleaner/VertexCleaner.ms', compat: 'Mọi phiên bản', icon: '🧽', price: 0, desc: 'Xóa vertex thừa, dọn dẹp mesh topology sạch sẽ.', driveLink: 'https://drive.google.com/drive/folders/1zvKwsQ8J5a0-n29vB1EFl4_iWHO2UnPT?usp=drive_link' }
    ],
    'autocad': [
        { name: 'Autodim v2', cmd: 'D1/D2/D3', size: '2 MB', file: '../tinh phi/Autodim/autodim v2.rar', compat: 'Mọi phiên bản', icon: '📏', price: '70.000đ (1 máy) / 110.000đ (2 máy)', desc: 'Lisp tự động đo kích thước thông minh siêu tốc (Phiên bản Tính phí).', driveLink: 'https://drive.google.com/drive/folders/1aIiYHRv7Gej3ti-R2eymeT2ZUz_h3i2z?usp=drive_link' },
        { name: 'Cắt chân Dim theo khoảng cách', cmd: 'KN', size: '1.2 KB', file: 'Cắt chân Dim cách 1 đường thẳng có giá trị cho trước/Cắt chân Dim cách 1 đường thẳng có giá trị cho trước (KN).LSP', compat: 'Mọi phiên bản', icon: '✂️', price: 0, desc: 'Cắt chân Dim cách 1 đường thẳng có giá trị cho trước, giúp bản vẽ gọn gàng.', driveLink: 'https://drive.google.com/drive/folders/1nZS6pAx7n5R8sQK7yoC1i-ZHbRZR8wWO?usp=drive_link' },
        { name: 'Cân bằng đầu Dim', cmd: 'BD', size: '1.5 KB', file: 'Cân bằng đâu dim/02. Cân bằng đầu Dim (BD).LSP', compat: 'Mọi phiên bản', icon: '📏', price: 0, desc: 'Cân bằng đầu dim cho các đối tượng dimension, giúp bản vẽ chuyên nghiệp hơn.', driveLink: 'https://drive.google.com/drive/folders/1_oHEY6wD6GmdvpPSIXY645eEdgpPJE7F?usp=drive_link' },
        { name: 'Cân bằng chân Dim', cmd: 'CD', size: '1.6 KB', file: 'Cân bằng chân dim/03. Cân bằng chân Dim (CD).LSP', compat: 'Mọi phiên bản', icon: '📐', price: 0, desc: 'Cân bằng chân dim tự động, đồng bộ vị trí chân các đường kích thước.', driveLink: 'https://drive.google.com/drive/folders/1JqecMf0O0JooespLFRV2ZlwhB13jyFHI?usp=drive_link' },
        { name: 'Cộng các Dim', cmd: 'CDS', size: '1.1 KB', file: 'cộng dim/04. Cộng các Dim (CDS).LSP', compat: 'Mọi phiên bản', icon: '➕', price: 0, desc: 'Cộng tổng giá trị của nhiều dim lại với nhau và hiển thị kết quả.', driveLink: 'https://drive.google.com/drive/folders/1jmrNexaW6FqI90tl9DSp7Q_ZfJE-KwUD?usp=drive_link' },
        { name: 'Vẽ cửa đi 1 cánh', cmd: 'C1', size: '1.1 KB', file: 'Vẽ cửa 1 cánh/05. Vẽ cửa đi 1 cánh (C1).LSP', compat: 'Mọi phiên bản', icon: '🚪', price: 0, desc: 'Vẽ nhanh cửa đi 1 cánh với cung mở chuẩn kiến trúc.', driveLink: 'https://drive.google.com/drive/folders/1x4wx4R4JiLt5iTKUi2jFDGefFL_OMULA?usp=drive_link' },
        { name: 'Vẽ cửa đi 2 cánh', cmd: 'C2', size: '1.4 KB', file: 'Vẽ cửa 2 cánh/06. Vẽ cửa đi 2 cánh (C2).LSP', compat: 'Mọi phiên bản', icon: '🚪', price: 0, desc: 'Vẽ nhanh cửa đi 2 cánh với 2 cung mở đối xứng chuẩn kiến trúc.', driveLink: 'https://drive.google.com/drive/folders/1Rje4yJEf_FMAlm4X6wbM55MXxSa9ATcY?usp=drive_link' },
        { name: 'Vẽ cầu thang', cmd: 'VCT', size: '0.5 KB', file: 'Vẽ cầu thang/07. Vẽ cầu thang (VCT).LSP', compat: 'Mọi phiên bản', icon: '🪜', price: 0, desc: 'Vẽ cầu thang tự động với số bậc và kích thước tùy chỉnh.', driveLink: 'https://drive.google.com/drive/folders/1yjqeQsjE4PjMtbenvlp9q8nOkXNg3_-m?usp=drive_link' },
        { name: 'Vẽ đường hàn', cmd: 'HX/HH', size: '1.1 KB', file: 'Vẽ đường hàn/08. Vẽ đường hàn (HX - HH).LSP', compat: 'Mọi phiên bản', icon: '⚡', price: 0, desc: 'Vẽ ký hiệu đường hàn xưởng (HX) và đường hàn hiện trường (HH).', driveLink: 'https://drive.google.com/drive/folders/1YeAgWXZILMHCUqENdFUo_H9bHnJfpQ2O?usp=drive_link' },
        { name: 'Vẽ Taluy', cmd: 'VLT0/VTL1/VTL2', size: '5.0 KB', file: 'Vẽ tay luy/09. Vẽ Taluy (VLT0 - VTL1 - VTL2).LSP', compat: 'Mọi phiên bản', icon: '⛰️', price: 0, desc: 'Vẽ ký hiệu taluy đắp, taluy đào với 3 kiểu khác nhau.', driveLink: 'https://drive.google.com/drive/folders/14d0e69IqL4gzHn3iu4pmmcUvluPg6sRi?usp=drive_link' },
        { name: 'Vẽ thép trên', cmd: 'SD', size: '1.2 KB', file: 'Vẽ thép trên/10. Vẽ thép trên (SD).LSP', compat: 'Mọi phiên bản', icon: '🔩', price: 0, desc: 'Vẽ ký hiệu thép lớp trên cho bản vẽ kết cấu bê tông cốt thép.', driveLink: 'https://drive.google.com/drive/folders/14x5oPiUTdh33uiNOcPo7dQUVnMZ232iA?usp=drive_link' },
        { name: 'Vẽ tường bao từ tim trục', cmd: 'VTT', size: '2.0 KB', file: 'Vẽ tường bao từ tim trục/12. Vẽ tường bao từ tim hoặc trục (VTT).LSP', compat: 'Mọi phiên bản', icon: '🧱', price: 0, desc: 'Vẽ tường bao tự động từ đường tim hoặc trục với chiều dày tùy chỉnh.', driveLink: 'https://drive.google.com/drive/folders/1ginbunbsuyYfS5y_SRbSrnllHGlK0gao?usp=drive_link' },
        { name: 'Kéo dài 2 đầu đoạn thẳng', cmd: 'KK', size: '0.6 KB', file: 'Kéo dài 2 đầu đoạn thẳng với 1 kích thước cho trước/13. Kéo dài 2 đầu đoạn thẳng với 1 kích thước cho trước (KK).LSP', compat: 'Mọi phiên bản', icon: '↔️', price: 0, desc: 'Kéo dài 2 đầu đoạn thẳng với một kích thước cho trước, tiện lợi khi vẽ.', driveLink: 'https://drive.google.com/drive/folders/19zv0RpCgj3YkE3cCInj3j-iX0Hlxprxf?usp=drive_link' },
        { name: 'Thay đổi góc Hatch', cmd: 'HA', size: '0.5 KB', file: 'Thay đổi góc hatch/14. Thay đổi góc của Hatch (HA).LSP', compat: 'Mọi phiên bản', icon: '🔄', price: 0, desc: 'Thay đổi góc xoay của hatch nhanh chóng mà không cần vào properties.', driveLink: 'https://drive.google.com/drive/folders/1-ubP-J3aM3mYkxrPj0B9IBPZD-QvhFef?usp=drive_link' },
        { name: 'Thay đổi tỉ lệ Hatch', cmd: 'HS', size: '0.6 KB', file: 'Thay đổi tỷ lệ hatch/15. Thay đổi tỉ lệ Hatch (HS).LSP', compat: 'Mọi phiên bản', icon: '🔍', price: 0, desc: 'Thay đổi tỉ lệ hatch nhanh, hỗ trợ điều chỉnh mật độ hatch dễ dàng.', driveLink: 'https://drive.google.com/drive/folders/1qJsKelMFtkwwqqr1lEUAi_Ol24MPUyEb?usp=drive_link' },
        { name: 'Hiện mã màu Layer', cmd: 'HM', size: '0.5 KB', file: 'Hiện mã màu của layer/16. Hiện mã màu của Layer (HM).LSP', compat: 'Mọi phiên bản', icon: '🎨', price: 0, desc: 'Hiển thị mã màu (color index) của layer đang chọn.', driveLink: 'https://drive.google.com/drive/folders/1t7CbECqHuSutH4SSZ2mdMgXa2y3WOn_A?usp=drive_link' },
        { name: 'Sao chép đối tượng đều nhau', cmd: 'CA', size: '0.5 KB', file: 'Sao chép 1 đối tượng ra nhiều đối tượng có khoảng cách bằng nhau/17. Sao chép 1 đối tượng ra nhiều đối tượng có khoảng cách bằng nhau (CA).LSP', compat: 'Mọi phiên bản', icon: '📋', price: 0, desc: 'Copy 1 đối tượng ra nhiều bản có khoảng cách đều nhau tự động.', driveLink: 'https://drive.google.com/drive/folders/1QHc7xAdKbCLC6T7XE2vcAm23fG-xvDCW?usp=drive_link' },
        { name: 'Nối đối tượng thành 1', cmd: 'N', size: '0.7 KB', file: 'Nối nhiều đối tượng với nhau thành 1 đối tượng/18. Nối nhiều đối tượng với nhau thành 1 đối tượng (N).LSP', compat: 'Mọi phiên bản', icon: '🔗', price: 0, desc: 'Nối nhiều đối tượng line, arc, polyline với nhau thành 1 đối tượng.', driveLink: 'https://drive.google.com/drive/folders/1G6xPAOguNU2JPCVGXDdp2-hcRj24VEPt?usp=drive_link' },
        { name: 'Chuyển Model ↔ Layout', cmd: 'C', size: '0.2 KB', file: 'Chuyển từ Model sang Layout và ngược lại/19. Chuyển từ Model sang Layout và ngược lại (C).LSP', compat: 'Mọi phiên bản', icon: '🔀', price: 0, desc: 'Chuyển nhanh giữa Model space và Layout (Paper space) bằng 1 lệnh.', driveLink: 'https://drive.google.com/drive/folders/1dZ7vY9Z5CCpug1_agLQny0TGN86_NxWy?usp=drive_link' },
        { name: 'Sao chép Text tăng dần', cmd: 'CS', size: '3.7 KB', file: 'Sao chép Text theo số thứ tự tăng dần/20. Sao chép Text theo số thứ tự tăng dần (CS).LSP', compat: 'Mọi phiên bản', icon: '🔢', price: 0, desc: 'Sao chép text theo thứ tự tăng dần (1, 2, 3...) tự động.', driveLink: 'https://drive.google.com/drive/folders/1FfB2XCbi3sTYUkXjRbzsTfS4_KqTL14J?usp=drive_link' },
        { name: 'Vẽ nét cắt cột tròn', cmd: 'NCC', size: '0.8 KB', file: 'Vẽ nét cắt cột tròn/21. Vẽ nét cắt cột tròn (NCC).LSP', compat: 'Mọi phiên bản', icon: '⭕', price: 0, desc: 'Vẽ ký hiệu nét cắt cho cột tròn trong bản vẽ kết cấu.', driveLink: 'https://drive.google.com/drive/folders/1p8ZRY1QK7P6I_Y70Q2BO9tHHiL58ax_p?usp=drive_link' },
        { name: 'Sao chép Block Attribute tăng dần', cmd: 'CSS', size: '2.1 KB', file: 'Sao chép Text Block Attribute theo số thứ tự tăng dần/22. Sao chép Text Block Attribute theo số thứ tự tăng dần (CSS).LSP', compat: 'Mọi phiên bản', icon: '🧩', price: 0, desc: 'Sao chép block attribute với text tăng dần, tiện cho đánh số phòng, trục.', driveLink: 'https://drive.google.com/drive/folders/1h49c4P8YA-JG6zC3Aywba0xALaZ_sFhM?usp=drive_link' },
        { name: 'Đặt tỉ lệ Viewport', cmd: 'TL', size: '0.2 KB', file: 'Đặt tỉ lệ Viewport trong Layout/23. Đặt tỉ lệ Viewport trong Layout (TL).LSP', compat: 'Mọi phiên bản', icon: '🖼️', price: 0, desc: 'Đặt tỉ lệ cho viewport trong layout nhanh chóng bằng 1 lệnh.', driveLink: 'https://drive.google.com/drive/folders/1THckuVWMs176lww9HKsrR_OplZ9uOjpc?usp=drive_link' },
        { name: 'Khóa/Mở Viewport', cmd: 'K', size: '1.2 KB', file: 'Khóa mở Viewport trong Layout/24. Khóa mở Viewport trong Layout (K).LSP', compat: 'Mọi phiên bản', icon: '🔒', price: 0, desc: 'Khóa/Mở viewport trong layout để tránh vô tình zoom thay đổi tỉ lệ.', driveLink: 'https://drive.google.com/drive/folders/1yi7qVXZSKG7bytFyR5UJsX9ZXZ604xCv?usp=drive_link' },
        { name: 'Mở khóa tất cả Layer', cmd: 'MKA', size: '0.2 KB', file: 'Mở khóa tất cả các Layer/25. Mở khóa tất cả các Layer (MKA).LSP', compat: 'Mọi phiên bản', icon: '🔓', price: 0, desc: 'Mở khóa tất cả các layer đang bị lock bằng 1 lệnh duy nhất.', driveLink: 'https://drive.google.com/drive/folders/1LbK1vrrVCWUYIy6IKHQ49IYJqrI9AGsw?usp=drive_link' },
        { name: 'Chia đối tượng bằng nhau', cmd: 'CL', size: '0.7 KB', file: 'Chia đối tượng thành các phần bằng nhau/26. Chia đối tượng thành các phần bằng nhau (CL).LSP', compat: 'Mọi phiên bản', icon: '📊', price: 0, desc: 'Chia đối tượng thành các đoạn bằng nhau với số phần tùy chọn.', driveLink: 'https://drive.google.com/drive/folders/1dEZx1qJNydU3s9sLikmiY31-X1crP2HX?usp=drive_link' },
        { name: 'Ẩn/Hiện đối tượng', cmd: 'A1/A2', size: '1.6 KB', file: 'Ẩn - Hiện từng đối tượng/27. Ẩn - Hiện từng đối tượng (A1 - A2).LSP', compat: 'Mọi phiên bản', icon: '👁️', price: 0, desc: 'Ẩn (A1) và hiện (A2) từng đối tượng riêng lẻ, tiện khi vẽ phức tạp.', driveLink: 'https://drive.google.com/drive/folders/1hvjBaNFeMGOpFQuJvKBYWXUGSxGKl956?usp=sharing' },
        { name: 'Tính diện tích Hatch', cmd: 'TDT', size: '1.2 KB', file: 'Tính diện tích vùng Hatch/28. Tính diện tích vùng Hatch (TDT).LSP', compat: 'Mọi phiên bản', icon: '📐', price: 0, desc: 'Tính tổng diện tích các vùng hatch được chọn, xuất kết quả nhanh.', driveLink: 'https://drive.google.com/drive/folders/1cflz9Q7lVhq-UoJp4i9fnLWKaqF4drYy?usp=drive_link' },
        { name: 'Đóng tất cả bản vẽ', cmd: 'CSN/CSY', size: '0.4 KB', file: 'Đóng tất cả bản vẽ/29. Đóng tất cả bản vẽ (CSN - CSY).LSP', compat: 'Mọi phiên bản', icon: '❌', price: 0, desc: 'Đóng tất cả bản vẽ đang mở. CSN = không lưu, CSY = lưu trước khi đóng.', driveLink: 'https://drive.google.com/drive/folders/1Dkibz05Aqm0kuMzLm-sxBpwGVtAipW-5?usp=drive_link' },
        { name: 'Vẽ nét cắt', cmd: 'NC', size: '0.6 KB', file: 'Vẽ nét cắt 1/30. Vẽ nét cắt 1 (NC).LSP', compat: 'Mọi phiên bản', icon: '✏️', price: 0, desc: 'Vẽ ký hiệu nét cắt cho mặt cắt bản vẽ kiến trúc, kết cấu.', driveLink: 'https://drive.google.com/drive/folders/1Fz_2acRhzlKFisRGE1yIyDs1tUFICrBz?usp=drive_link' },
        { name: 'Offset 2 bên', cmd: '46', size: '1.1 KB', file: 'Offset đối tượng sang hai bên với 1 khoảng cách cho trước/31. Offset đối tượng sang hai bên với 1 khoảng cách cho trước (46).LSP', compat: 'Mọi phiên bản', icon: '↕️', price: 0, desc: 'Offset đối tượng sang cả 2 bên cùng lúc với khoảng cách cho trước.', driveLink: 'https://drive.google.com/drive/folders/1q4vaK9jZCZ5nz2kEfJwHArLXF8Px8wCX?usp=drive_link' },
        { name: 'Break đối tượng', cmd: 'BF', size: '0.3 KB', file: 'Break đối tượng/32. Break đối tượng (BF).LSP', compat: 'Mọi phiên bản', icon: '💥', price: 0, desc: 'Break (cắt đôi) đối tượng tại 1 điểm nhanh chóng.', driveLink: 'https://drive.google.com/drive/folders/1X9Joce-t1cGHQAXdy2ILeYRjsx7JDy6l?usp=drive_link' },
        { name: 'Quét rác Purge', cmd: 'QQ', size: '0.1 KB', file: 'Quét rác Purge/33. Quét rác Purge (QQ).LSP', compat: 'Mọi phiên bản', icon: '🧹', price: 0, desc: 'Quét sạch rác trong bản vẽ (block thừa, layer trống, style không dùng).', driveLink: 'https://drive.google.com/drive/folders/171LsLiHgqNjomy7nH-ZVKQGIR0cNhuzN?usp=drive_link' },
        { name: 'Cộng tổng chiều dài', cmd: 'TC', size: '0.4 KB', file: 'Cộng tổng chiều dài các đối tượng/34. Cộng tổng chiều dài các đối tượng (TC).LSP', compat: 'Mọi phiên bản', icon: '📏', price: 0, desc: 'Cộng tổng chiều dài của nhiều đối tượng line, polyline, arc được chọn.', driveLink: 'https://drive.google.com/drive/folders/1INKqYoLzyopeqE6A3mEtdDW7bcnaQ2uh?usp=drive_link' },
        { name: 'Cân bằng đầu Dim', cmd: 'BD', size: '1.5 KB', file: 'Cân bằng đâu dim/02. Cân bằng đầu Dim (BD).LSP', compat: 'Mọi phiên bản', icon: '📐', price: 0, desc: 'Cân bằng đầu dim tự động, căn chỉnh vị trí đầu các đường kích thước.', driveLink: 'https://drive.google.com/drive/folders/1_oHEY6wD6GmdvpPSIXY645eEdgpPJE7F?usp=drive_link' },
        { name: 'Cắt chân Dim', cmd: 'KN', size: '1.2 KB', file: 'Cắt chân Dim cách 1 đường thẳng có giá trị cho trước/Cắt chân Dim cách 1 đường thẳng có giá trị cho trước (KN).LSP', compat: 'Mọi phiên bản', icon: '✂️', price: 0, desc: 'Cắt chân Dim cách 1 đường thẳng với giá trị cho trước chuẩn xác.', driveLink: 'https://drive.google.com/drive/folders/1nZS6pAx7n5R8sQK7yoC1i-ZHbRZR8wWO?usp=drive_link' },
        { name: 'Kiểm tra lỗ ban', cmd: 'LB1/LB2/LB3', size: '2.9 KB', file: 'Kiểm tra lỗ ban/LoBan-LB1-LB2-LB3.lsp', compat: 'Mọi phiên bản', icon: '🧭', price: 0, desc: 'Kiểm tra kích thước theo thước Lỗ Ban phong thủy (3 chế độ LB1, LB2, LB3).', driveLink: 'https://drive.google.com/drive/folders/1qXzSrt_c7R4B5OAvmfN19ATRyOIwU1NK?usp=drive_link' },
        { name: 'Random Rotate', cmd: 'RRT', size: '0.7 KB', file: 'Random Rotate/RandomRotate-RRT.lsp', compat: 'Mọi phiên bản', icon: '🔀', price: 0, desc: 'Xoay ngẫu nhiên nhiều đối tượng cùng lúc, tạo bố cục tự nhiên.', driveLink: 'https://drive.google.com/drive/folders/1sTH9s7z_aTj9dZkh2KhIhxKuVXYtJ65G?usp=drive_link' },
        { name: 'Reset Rotate', cmd: 'RR', size: '0.7 KB', file: 'Reset Rotate/ResetRotate-RR.lsp', compat: 'Mọi phiên bản', icon: '🔄', price: 0, desc: 'Reset góc xoay về 0° cho tất cả đối tượng được chọn.', driveLink: 'https://drive.google.com/drive/folders/1iAkpeVLLJl5Y90TIL4ldJ5DZSb7gXU5B?usp=drive_link' }
    ],
    'sketchup': [
        { name: 'Suforyou 2025 (Bộ Full)', version: '2025', size: '4.11 MB', file: 'Suforyou 2025/Suforyou 2025.rar', compat: 'Mọi phiên bản', icon: '🛠️', price: 0, desc: 'Bộ công cụ s4u bao gồm Slice, Mirror, Scale, Weld và rất nhiều tool thần tốc khác.', driveLink: 'https://drive.google.com/drive/folders/1_WqhrwZtar3sXqqXqDZnnj8aRy6T5HYT?usp=sharing' },
        { name: 'Vẽ Tủ Nhanh', version: '1.0', size: '0.03 MB', file: 'Vẽ tủ nhanh/HungVeTu mh.rbz', compat: 'Mọi phiên bản', icon: '🗄️', price: 0, desc: 'Plugin vẽ tủ đồ nội thất, chia đợt, cánh tự động cực kỳ nhanh nhẹn.', driveLink: 'https://drive.google.com/drive/folders/1JVUUdyiGn7GIjcWGWRq8ocdR6OkWQpbx?usp=sharing' },
        { name: 'Đặt Cửa Tự Động', version: '9.1', size: '58.46 MB', file: 'Đặt cửa tự động/Cửa_9_1 3 thang.rbz', compat: 'Mọi phiên bản', icon: '🚪', price: 0, desc: 'Tự động đục tường và chèn cửa siêu tốc (đã bao gồm nguyên bộ thư viện 3D).', driveLink: 'https://drive.google.com/drive/folders/1aR3i74N0PAZWLZTCYH1vpdhQpBy7VS_H?usp=sharing' }
    ]
};

// ==================== DOM Elements ====================
const DOM = {
    canvas: document.getElementById('particle-canvas'),
    loadingScreen: document.getElementById('loading-screen'),
    navbar: document.getElementById('navbar'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.getElementById('nav-links'),
    searchToggle: document.getElementById('search-toggle'),
    searchOverlay: document.getElementById('search-overlay'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    backToTop: document.getElementById('back-to-top'),
    modalOverlay: document.getElementById('modal-overlay'),
    modal: document.getElementById('download-modal'),
    modalClose: document.getElementById('modal-close'),
    cursorDot: document.getElementById('cursor-dot'),
    cursorRing: document.getElementById('cursor-ring'),
    paymentOverlay: document.getElementById('payment-overlay'),
};

// ==================== Loading Screen ====================
// Handled by animations.js — legendary loading v2

//  ==================== Particle System ====================
(function initParticles() {
    const canvas = DOM.canvas;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0, mouseY = 0;
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.hue = Math.random() > 0.5 ? 239 : 187; // blue or cyan
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse interaction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const force = (120 - dist) / 120;
                this.x -= dx * force * 0.008;
                this.y -= dy * force * 0.008;
            }

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticlesArray() {
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    const opacity = (1 - dist / 140) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `hsla(239, 80%, 70%, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initParticlesArray();
    });

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    resize();
    initParticlesArray();
    animate();
})();

// ==================== Custom Cursor ====================
(function initCursor() {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let targetX = 0, targetY = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateCursor() {
        dotX += (targetX - dotX) * 0.2;
        dotY += (targetY - dotY) * 0.2;
        ringX += (targetX - ringX) * 0.08;
        ringY += (targetY - ringY) * 0.08;

        DOM.cursorDot.style.left = dotX + 'px';
        DOM.cursorDot.style.top = dotY + 'px';
        DOM.cursorRing.style.left = ringX + 'px';
        DOM.cursorRing.style.top = ringY + 'px';

        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hover state
    const hoverElements = 'a, button, .plugin-card, .category-card, input';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverElements)) {
            document.body.classList.add('cursor-hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverElements)) {
            document.body.classList.remove('cursor-hover');
        }
    });
})();

// ==================== Navigation ====================
// Scroll effect
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar background
    DOM.navbar.classList.toggle('scrolled', scrollY > 50);

    // Back to top
    DOM.backToTop.classList.toggle('visible', scrollY > 600);

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });

    lastScrollY = scrollY;
});

// Hamburger
DOM.hamburger.addEventListener('click', () => {
    DOM.hamburger.classList.toggle('active');
    DOM.navLinks.classList.toggle('active');
});

// Close mobile nav on link click
DOM.navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        DOM.hamburger.classList.remove('active');
        DOM.navLinks.classList.remove('active');
    });
});

// Back to top
DOM.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== Search ====================
DOM.searchToggle.addEventListener('click', () => {
    DOM.searchOverlay.classList.toggle('active');
    if (DOM.searchOverlay.classList.contains('active')) {
        setTimeout(() => DOM.searchInput.focus(), 200);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        DOM.searchOverlay.classList.remove('active');
        closeModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        DOM.searchOverlay.classList.toggle('active');
        if (DOM.searchOverlay.classList.contains('active')) {
            setTimeout(() => DOM.searchInput.focus(), 200);
        }
    }
});

document.addEventListener('click', (e) => {
    if (DOM.searchOverlay.classList.contains('active') &&
        !DOM.searchOverlay.contains(e.target) &&
        !DOM.searchToggle.contains(e.target)) {
        DOM.searchOverlay.classList.remove('active');
    }
});

DOM.searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        DOM.searchResults.innerHTML = '';
        return;
    }

    const results = [];
    const categoryColors = {
        '3dsmax': { bg: 'rgba(99,102,241,0.12)', color: '#818cf8' },
        'autocad': { bg: 'rgba(16,185,129,0.12)', color: '#34d399' },
        'sketchup': { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24' },
    };
    const categoryLabels = {
        '3dsmax': '3ds Max',
        'autocad': 'AutoCAD',
        'sketchup': 'SketchUp',
    };

    Object.keys(pluginsData).forEach(cat => {
        pluginsData[cat].forEach(plugin => {
            if (plugin.name.toLowerCase().includes(query) ||
                plugin.desc.toLowerCase().includes(query)) {
                results.push({ ...plugin, category: cat });
            }
        });
    });

    if (results.length === 0) {
        DOM.searchResults.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-tertiary); font-size: 14px;">Không tìm thấy kết quả</div>`;
        return;
    }

    DOM.searchResults.innerHTML = results.slice(0, 8).map(r => `
        <div class="search-result-item" data-plugin="${r.name}" data-category="${r.category}">
            <div class="result-icon" style="background: ${categoryColors[r.category].bg}; color: ${categoryColors[r.category].color}; font-size: 20px; border-radius: 8px;">
                ${r.icon}
            </div>
            <div class="result-info">
                <h4>${r.name}</h4>
                <p>${categoryLabels[r.category]} · v${r.version}</p>
            </div>
        </div>
    `).join('');

    DOM.searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.plugin;
            const cat = item.dataset.category;
            const plugin = pluginsData[cat].find(p => p.name === name);
            if (plugin) {
                openModal(plugin, cat);
                DOM.searchOverlay.classList.remove('active');
                DOM.searchInput.value = '';
                DOM.searchResults.innerHTML = '';
            }
        });
    });
});

// ==================== Generate Plugin Cards ====================
function createPluginCard(plugin, category, index) {
    const card = document.createElement('div');
    card.className = 'plugin-card';
    card.dataset.category = category;
    card.dataset.price = plugin.price === 0 ? 'free' : 'paid';
    card.style.setProperty('--stagger', `${index * 0.07}s`);

    const isFree = plugin.price === 0 || plugin.price === '0';
    const formattedPrice = isFree ? 'Miễn phí' : (typeof plugin.price === 'number' ? `${plugin.price}.000 VNĐ` : plugin.price);
    const priceLabel = formattedPrice;
    const priceBadgeClass = isFree ? 'price-badge price-free' : 'price-badge price-paid';
    const btnText = isFree ? 'Tải miễn phí' : 'Mua ngay';
    const btnIcon = isFree
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>';

    // Version or Command display
    const versionLabel = plugin.cmd ? `Lệnh: ${plugin.cmd}` : `v${plugin.version}`;

    card.innerHTML = `
        <div class="card-neon-glow"></div>
        <span class="${priceBadgeClass}">${priceLabel}</span>
        <div class="plugin-card-header">
            <div class="plugin-card-icon">${plugin.icon}</div>
            <div class="plugin-card-info">
                <h4 class="plugin-card-name">${plugin.name}</h4>
                <span class="plugin-card-version">${versionLabel}</span>
            </div>
        </div>
        <p class="plugin-card-desc">${plugin.desc}</p>
        <div class="plugin-card-footer">
            <span class="plugin-card-size">${plugin.size}</span>
            <span class="plugin-card-download">
                ${btnIcon}
                ${btnText}
            </span>
        </div>
    `;

    card.addEventListener('click', () => openModal(plugin, category));

    // Ripple effect on click
    card.addEventListener('mousedown', (e) => {
        const rect = card.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        card.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });

    return card;
}

function renderPlugins() {
    Object.keys(pluginsData).forEach(category => {
        const grid = document.getElementById(`grid-${category}`);
        if (!grid) return;
        pluginsData[category].forEach((plugin, i) => {
            grid.appendChild(createPluginCard(plugin, category, i));
        });
    });
}

renderPlugins();

// ==================== Modal ====================
function openModal(plugin, category) {
    const categoryMeta = {
        '3dsmax': { label: '3ds Max', bg: 'rgba(99,102,241,0.12)', color: '#818cf8', border: 'rgba(99,102,241,0.2)' },
        'autocad': { label: 'AutoCAD Lisp', bg: 'rgba(16,185,129,0.12)', color: '#34d399', border: 'rgba(16,185,129,0.2)' },
        'sketchup': { label: 'SketchUp', bg: 'rgba(245,158,11,0.12)', color: '#fbbf24', border: 'rgba(245,158,11,0.2)' },
    };

    const meta = categoryMeta[category];
    const isFree = plugin.price === 0 || plugin.price === '0';
    const formattedPrice = isFree ? 'Miễn phí' : (typeof plugin.price === 'number' ? `${plugin.price}.000 VNĐ` : plugin.price);

    document.getElementById('modal-icon').innerHTML = plugin.icon;
    document.getElementById('modal-icon').style.background = meta.bg;
    document.getElementById('modal-title').textContent = plugin.name;
    document.getElementById('modal-category').textContent = meta.label;
    document.getElementById('modal-category').style.background = meta.bg;
    document.getElementById('modal-category').style.color = meta.color;
    document.getElementById('modal-desc').textContent = plugin.desc;

    // Version or Command
    const versionEl = document.getElementById('modal-version');
    if (plugin.cmd) {
        versionEl.textContent = plugin.cmd;
        versionEl.parentElement.querySelector('.info-label').textContent = 'Lệnh';
    } else {
        versionEl.textContent = 'v' + plugin.version;
        versionEl.parentElement.querySelector('.info-label').textContent = 'Phiên bản';
    }

    document.getElementById('modal-size').textContent = plugin.size;
    document.getElementById('modal-compat').textContent = plugin.compat;

    // Price display
    const priceEl = document.getElementById('modal-price');
    if (priceEl) {
        priceEl.textContent = formattedPrice;
        priceEl.className = 'modal-price ' + (isFree ? 'modal-price-free' : 'modal-price-paid');
    }

    // Download button
    const downloadBtn = document.getElementById('modal-download-btn');

    // Store Drive link and price on button for the click handler
    downloadBtn.dataset.driveLink = plugin.driveLink || '';
    downloadBtn.dataset.isFree = isFree;
    downloadBtn.dataset.priceLabel = formattedPrice;
    downloadBtn.dataset.pluginName = plugin.name;
    downloadBtn.href = '#';

    const btnSpan = downloadBtn.querySelector('span');
    if (btnSpan) {
        btnSpan.textContent = isFree ? 'Tải xuống miễn phí' : `Mua — ${formattedPrice}`;
    }
    downloadBtn.className = 'btn btn-download ' + (isFree ? 'btn-primary' : 'btn-paid');

    DOM.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== Download Handler (First Step) ====================
document.getElementById('modal-download-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const driveLink = this.dataset.driveLink;
    const isFree = this.dataset.isFree === 'true';

    if (!isFree) {
        // Handle PAID flow -> Open QR Payment Modal
        const pluginName = this.dataset.pluginName;
        document.getElementById('payment-plugin-name').textContent = pluginName;
        document.getElementById('payment-price').textContent = this.dataset.priceLabel;
        document.getElementById('payment-syntax').textContent = `MUA ${pluginName.toUpperCase()}`;

        // Setup the download button with Drive link
        const dlBtn = document.getElementById('final-download-btn');
        dlBtn.dataset.driveLink = driveLink;

        closeModal();
        DOM.paymentOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // GSAP Futuristic Edge Animation for Payment Modal
        if (typeof gsap !== 'undefined') {
            const paymentModal = document.getElementById('payment-modal');
            const qrContainer = paymentModal.querySelector('.qr-container');
            const paymentInfo = paymentModal.querySelectorAll('.cyber-info-row, .transfer-syntax, .cyber-note');
            const footerBtns = paymentModal.querySelectorAll('.payment-footer .cyber-btn');

            gsap.set(paymentModal, { scale: 0.7, opacity: 0, rotationX: 20 });
            gsap.set('.cyber-grid-bg', { opacity: 0 });
            gsap.set('.cyber-glow-orb', { scale: 0, opacity: 0 });
            gsap.set(qrContainer, { scale: 0.2, rotationZ: -10, filter: "blur(10px)", opacity: 0 });
            gsap.set('.hud-corner', { scale: 0, opacity: 0, rotation: 90 });
            gsap.set(paymentInfo, { x: -30, opacity: 0, filter: "blur(5px)" });
            gsap.set(footerBtns, { y: 20, opacity: 0, scale: 0.95 });

            const tl = gsap.timeline();
            tl.to(paymentModal, { scale: 1, opacity: 1, rotationX: 0, duration: 0.8, ease: "expo.out" })
                .to('.cyber-grid-bg', { opacity: 0.3, duration: 1 }, "-=0.6")
                .to('.cyber-glow-orb', { scale: 1, opacity: 0.4, duration: 1.5, ease: "power2.out" }, "-=0.8")
                .to(qrContainer, { scale: 1, rotationZ: 0, filter: "blur(0px)", opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.6)" }, "-=0.5")
                .to('.hud-corner', { scale: 1, opacity: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=0.6")
                .to(paymentInfo, { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4")
                .to(footerBtns, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: "elastic.out(1.2, 0.5)" }, "-=0.2");
        }
        return;
    }

    // Handle FREE flow -> Open Google Drive link
    if (!driveLink) {
        alert('Link tải chưa được cập nhật. Vui lòng quay lại sau!');
        return;
    }
    window.open(driveLink, '_blank');
    const btnSpan = this.querySelector('span');
    const origText = btnSpan.textContent;
    btnSpan.textContent = '✓ Đã mở link tải!';
    setTimeout(() => { btnSpan.textContent = origText; }, 2000);
});

// ==================== Final Download Button Handler ====================
document.getElementById('final-download-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const driveLink = this.dataset.driveLink;
    if (!driveLink) {
        alert('Link tải chưa được cập nhật. Vui lòng quay lại sau!');
        return;
    }
    window.open(driveLink, '_blank');
    const btnSpan = this.querySelector('span');
    btnSpan.textContent = '✓ Đã mở link tải!';
    setTimeout(() => { btnSpan.textContent = 'Tải File'; }, 2000);
});

// ==================== Final FB Button Handler ====================
document.getElementById('final-fb-btn').addEventListener('click', function () {
    // FB link opens naturally via href target="_blank"
    // Close the payment modal after a brief delay
    setTimeout(() => {
        closePaymentModal();
    }, 1500);
});

function closeModal() {
    DOM.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function closePaymentModal() {
    DOM.paymentOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

DOM.modalClose.addEventListener('click', closeModal);
DOM.modalOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.modalOverlay) closeModal();
});

document.getElementById('payment-close').addEventListener('click', closePaymentModal);
DOM.paymentOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.paymentOverlay) closePaymentModal();
});

// ==================== Donate Modal ====================
const donateOverlay = document.getElementById('donate-overlay');
const donateModal = document.getElementById('donate-modal');

function openDonateModal() {
    donateOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (typeof gsap !== 'undefined') {
        const qrContainer = donateModal.querySelector('.qr-container');
        const donateInfo = donateModal.querySelectorAll('.cyber-title, .cyber-title + p, .transfer-syntax');

        gsap.set(donateModal, { scale: 0.7, opacity: 0, rotationX: 20 });
        gsap.set('.cyber-grid-bg', { opacity: 0 });
        gsap.set('.cyber-glow-orb', { scale: 0, opacity: 0 });
        gsap.set(qrContainer, { scale: 0.2, rotationZ: -10, filter: "blur(10px)", opacity: 0 });
        gsap.set(donateModal.querySelectorAll('.hud-corner'), { scale: 0, opacity: 0, rotation: 90 });
        gsap.set(donateInfo, { y: 20, opacity: 0 });

        const tl = gsap.timeline();
        tl.to(donateModal, { scale: 1, opacity: 1, rotationX: 0, duration: 0.8, ease: "expo.out" })
            .to(donateModal.querySelector('.cyber-grid-bg'), { opacity: 0.3, duration: 1 }, "-=0.6")
            .to(donateModal.querySelector('.cyber-glow-orb'), { scale: 1, opacity: 0.4, duration: 1.5, ease: "power2.out" }, "-=0.8")
            .to(qrContainer, { scale: 1, rotationZ: 0, filter: "blur(0px)", opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.6)" }, "-=0.5")
            .to(donateModal.querySelectorAll('.hud-corner'), { scale: 1, opacity: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=0.6")
            .to(donateInfo, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4");
    }
}

function closeDonateModal() {
    donateOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('donate-toggle').addEventListener('click', openDonateModal);
document.getElementById('donate-close').addEventListener('click', closeDonateModal);
donateOverlay.addEventListener('click', (e) => {
    if (e.target === donateOverlay) closeDonateModal();
});

// ==================== All Animations ====================
// Reveal animations, counters, tilt, parallax — all handled by GSAP in animations.js

// ==================== Dynamic Stats Update ====================
document.addEventListener('DOMContentLoaded', () => {
    const totalPluginsCount = Object.values(pluginsData).reduce((sum, arr) => sum + arr.length, 0);
    const statNode = document.getElementById('total-plugins-stat');
    if (statNode) {
        statNode.setAttribute('data-target', totalPluginsCount);
        // Note: The counter animation will pick this up automatically in animations.js
    }
});

console.log('%c🚀 VHD Plugin Collection and Development — Core Loaded', 'color: #818cf8; font-size: 14px; font-weight: bold;');

// ==================== Section Title 3D Hover (GSAP) ====================
document.addEventListener('DOMContentLoaded', () => {
    const sectionTitles = document.querySelectorAll('.plugins-section .section-title');

    sectionTitles.forEach(title => {
        const colorSpan = title.querySelector('.text-blue, .text-green, .text-orange');
        const glowColor = colorSpan?.classList.contains('text-blue') ? 'rgba(99,102,241,0.5)'
            : colorSpan?.classList.contains('text-green') ? 'rgba(16,185,129,0.5)'
                : 'rgba(245,158,11,0.5)';

        title.addEventListener('mouseenter', () => {
            if (typeof gsap === 'undefined') return;
            gsap.to(title, {
                scale: 1.1,
                rotateY: -5,
                rotateX: 3,
                textShadow: `3px 3px 16px ${glowColor}`,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
            });
            if (colorSpan) {
                gsap.to(colorSpan, {
                    filter: `brightness(1.5) drop-shadow(0 0 14px ${glowColor})`,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        });

        title.addEventListener('mouseleave', () => {
            if (typeof gsap === 'undefined') return;
            gsap.to(title, {
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                textShadow: 'none',
                duration: 0.5,
                ease: 'power2.inOut',
                overwrite: 'auto'
            });
            if (colorSpan) {
                gsap.to(colorSpan, {
                    filter: 'brightness(1) drop-shadow(0 0 0px transparent)',
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
            }
        });
    });
});

