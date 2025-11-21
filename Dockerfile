# Sử dụng base image node:alpine cho kích thước nhỏ gọn
FROM node:alpine

# Thiết lập working directory
WORKDIR /app

# Sao chép package.json và package-lock.json để install dependencies
COPY package*.json ./

# Gỡ bỏ dependency cụ thể cho Windows để tránh lỗi trên Linux/Alpine
RUN npm uninstall @next/swc-win32-x64-msvc

# Chạy npm install để cài đặt dependencies phù hợp với môi trường Docker
RUN npm install

# Sao chép toàn bộ source code
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Khai báo port expose (mặc định 3000 cho Next.js)
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]