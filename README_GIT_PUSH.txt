Hướng dẫn nhanh: đẩy mã lên GitHub từ thư mục dự án (Windows PowerShell)

1) Tạo repo cục bộ (nếu chưa có):
# Mở PowerShell ở thư mục dự án
git init
git add .
git commit -m "Initial: add project files"

2) Tạo repository trên GitHub (tên repo là ví dụ: assignment3-cv)
- Truy cập https://github.com -> New repository -> đặt tên -> Create repository

3) Thêm remote và push (thay YOUR_REMOTE_URL bằng URL repo GitHub của bạn):
# ví dụ URL: https://github.com/username/assignment3-cv.git
git remote add origin YOUR_REMOTE_URL
git branch -M main
git push -u origin main

Ghi chú:
- Nếu đang dùng SSH, dùng SSH URL thay cho HTTPS
- Nếu Git yêu cầu xác thực với HTTPS, nhập username/password hoặc token (GITHUB_TOKEN). Nên dùng Personal Access Token (PAT) thay password.
- Nếu bạn muốn, tôi có thể thử chạy các lệnh git ở máy của bạn (y/n). Nếu đồng ý, hãy gửi URL repo (hoặc grant token) để tôi dùng để push.

Nếu bạn muốn tôi tự động chạy các lệnh git từ đây, cho biết remote URL (ví dụ: https://github.com/yourname/repo.git) và xác nhận bạn cho phép push.