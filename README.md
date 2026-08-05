# 🏭 Mini SMA — Smart Manufacturing Agentic AI

<div align="center">

![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20React%20%7C%20PostgreSQL-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Learning](https://img.shields.io/badge/Purpose-Learning%20by%20Building-purple?style=for-the-badge)

> **Mini SMA** là một dự án học tập thực chiến (Project-based Learning), xây dựng một hệ thống quản lý sản xuất thông minh thu nhỏ — tích hợp từ **CRUD cơ bản → AI/RAG → IoT Telemetry → Kiến trúc phân tán (Neo4j, TimescaleDB, Docker)**.

[📖 Lộ trình học](#-lộ-trình-4-giai-đoạn) · [⚙️ Tech Stack](#️-tech-stack) · [📂 Cấu trúc dự án](#-cấu-trúc-dự-án) · [🚀 Hướng dẫn chạy](#-hướng-dẫn-chạy)

</div>

---

## 🎯 Mục tiêu dự án

Thay vì học lý thuyết rời rạc, dự án này lấy bài toán thực tế của một **Hệ thống Quản lý Sản xuất (SMA)** làm xương sống, giúp người học:

- ✅ **Hiểu luồng dữ liệu** đi từ Database → Backend → Frontend.
- ✅ **Tư duy kiến trúc phân tầng** (Layered Architecture) ngay từ ngày đầu.
- ✅ **Thực chiến với AI/RAG** — biết cách đưa AI Agent vào nghiệp vụ thực tế.
- ✅ **Nắm bắt IoT Telemetry** — kết nối phần mềm với thế giới vật lý.
- ✅ **Hiểu khi nào và tại sao** cần đến Neo4j, TimescaleDB, Docker — thay vì dùng vì nghe "hot".

---

## ⚙️ Tech Stack

| Tầng | Công nghệ | Vai trò |
|------|-----------|---------|
| 🗄️ **Database** | PostgreSQL + `pgvector` | Lưu trữ quan hệ + Vector Search |
| 🧠 **Knowledge Graph** | Neo4j | Truy vấn quan hệ phức tạp (Giai đoạn 4) |
| ⏱️ **Time-series** | TimescaleDB | Tối ưu dữ liệu IoT (Giai đoạn 4) |
| 🔧 **Backend** | Node.js + Express | RESTful API, Business Logic |
| 🗂️ **ORM** | Prisma / Sequelize | Ánh xạ Object ↔ Database |
| ⚛️ **Frontend** | React + TypeScript | Dashboard, Form, Chatbox |
| 📊 **Charts** | Recharts / Chart.js | Visualize IoT Telemetry |
| 🤖 **AI / RAG** | OpenAI / Gemini API + pgvector | AI Agent, Hybrid Search |
| 🌐 **IoT** | ESP32 / Python Mock Script | Thu thập dữ liệu cảm biến |
| 🔄 **CDC Pipeline** | Debezium + Kafka/Redis Streams | Đồng bộ dữ liệu PostgreSQL → Neo4j |
| 📦 **DevOps** | Docker + Docker Compose | Đóng gói toàn bộ hệ thống |

---

## 🗺️ Lộ trình 4 Giai đoạn

Dự án được xây dựng theo chiến lược **Top-Down** (từ đơn giản đến phức tạp). Chỉ khi giai đoạn trước ổn định 100% mới chuyển sang giai đoạn tiếp theo.

```
Giai đoạn 1 ──→ Giai đoạn 2 ──→ Giai đoạn 3 ──→ Giai đoạn 4
  CRUD &           AI & RAG        IoT Real-time     Scale-up &
  API cơ bản       Chatbox         Visualization     Architect
  (Tuần 1-2)       (Tuần 3-4)      (Tuần 5)          (Tuần 6+)
```

### 🟢 Giai đoạn 1: CRUD & Luồng Dữ Liệu Cơ Bản *(Đang thực hiện)*

> *Mục tiêu: Hiểu rõ luồng dữ liệu truyền thống từ Database → Backend → Frontend*

- [x] Cài đặt và cấu hình PostgreSQL trên WSL2
- [x] Thiết kế schema: Bảng `Products` và `WorkOrders`
- [x] Khởi tạo Backend Node.js/Express
- [x] Thiết lập cấu trúc thư mục Layered Architecture
- [ ] Kết nối ORM (Prisma) tới PostgreSQL
- [ ] Viết RESTful API (CRUD) cho `WorkOrders` & `Products`
- [ ] Khởi tạo Frontend React + TypeScript (Vite)
- [ ] Dashboard với Table & Form nhập liệu

### 🔵 Giai đoạn 2: Trợ Lý AI & RAG

> *Mục tiêu: Đưa AI Agent vào nghiệp vụ thực tế với Vector Search*

- [ ] Kích hoạt `pgvector` extension
- [ ] Xây dựng Data Ingestion Pipeline (PDF → Embedding → DB)
- [ ] Phát triển Chatbox UI với luồng Hybrid Search

### 🟡 Giai đoạn 3: IoT Telemetry

> *Mục tiêu: Kết nối phần mềm với thế giới vật lý, xử lý real-time*

- [ ] Viết Mock Script giả lập dữ liệu cảm biến (nhiệt độ, độ rung)
- [ ] Xây dựng API nhận luồng HTTP POST/MQTT
- [ ] Real-time Chart visualization

### 🔴 Giai đoạn 4: Nâng Cấp Kiến Trúc

> *Mục tiêu: Áp dụng công nghệ "hạng nặng" khi có bài toán thực tế đòi hỏi*

- [ ] Containerization với Docker
- [ ] Tích hợp Neo4j + Debezium CDC
- [ ] Chuyển đổi sang TimescaleDB
- [ ] Advanced AI Agent (Multi-Agent, Audit Log, HITL)

---

## 📂 Cấu trúc Dự án

```
mini_SMA/
│
├── 📁 docs/                          # Tài liệu dự án
│   ├── 0.Learning_Tracker.md         # Lộ trình & nhật ký học tập
│   ├── 1.mini_SMA_Project_Description.md
│   └── 2.Knowledge_Notes_Session1.md
│
├── 📁 mini_sma_backend/              # Backend - Node.js/Express
│   ├── src/
│   │   ├── 📁 routes/                # Định tuyến URL (Endpoints)
│   │   ├── 📁 controllers/           # Nhận Request → Trả Response
│   │   ├── 📁 services/              # Business Logic & Xử lý nghiệp vụ
│   │   ├── 📁 models/                # Tương tác với Database (ORM)
│   │   ├── 📁 config/                # Cấu hình môi trường
│   │   └── server.js                 # Entry-point — Khởi chạy Express Server
│   ├── .gitignore
│   └── package.json
│
└── 📁 mini_sma_frontend/             # Frontend - React/TypeScript (Sắp có)
    └── ...
```

### 🏗️ Kiến trúc Layered Architecture (Backend)

```
HTTP Request
    ↓
[  Routes  ]        → Định tuyến đến đúng Controller
    ↓
[ Controllers ]     → Nhận Request, điều phối, trả JSON Response
    ↓
[  Services  ]      → Xử lý Business Logic (tính toán, kiểm tra)
    ↓
[   Models   ]      → Truy vấn Database qua ORM
    ↓
[ PostgreSQL ]      → Lưu trữ dữ liệu
```

---

## 🚀 Hướng dẫn Chạy

### Yêu cầu môi trường

- Node.js `>= 18.x`
- PostgreSQL `>= 15.x` (chạy trên WSL2 hoặc Local)
- npm `>= 9.x`

### 1. Clone dự án

```bash
git clone https://github.com/tranviet-tv/learn_database_by_project.git
cd learn_database_by_project
```

### 2. Cài đặt Backend

```bash
cd mini_sma_backend
npm install
```

### 3. Cấu hình biến môi trường

```bash
# Tạo file .env từ template
cp .env.example .env
```

Chỉnh sửa file `.env`:

```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/mini_sma"
```

### 4. Chạy Backend

```bash
node src/server.js
```

Mở trình duyệt và truy cập: `http://localhost:3000/health`

---

## 🧠 Triết lý học tập của dự án

> *"Mọi công nghệ đều là thuốc giải cho một vấn đề cụ thể. Hãy hiểu vấn đề trước khi dùng thuốc."*

| Công nghệ | Vấn đề nó giải quyết | Khi nào dùng |
|-----------|----------------------|--------------|
| **PostgreSQL** | Lưu trữ dữ liệu có cấu trúc, quan hệ | Từ Giai đoạn 1 |
| **pgvector** | Tìm kiếm ngữ nghĩa (Semantic Search) | Khi làm AI/RAG |
| **Neo4j** | Truy vấn quan hệ đa chiều quá phức tạp với SQL | Khi SQL JOIN > 5 bảng |
| **TimescaleDB** | Hàng triệu dòng dữ liệu thời gian làm chậm hệ thống | Khi IoT data quá lớn |
| **Docker** | Môi trường chạy khác nhau giữa Dev/Staging/Production | Khi cần triển khai ổn định |
| **Debezium** | Cần đồng bộ dữ liệu realtime giữa các DB | Khi kiến trúc đa Database |

---

## 📈 Progress Tracker

Xem chi tiết nhật ký học tập tại: [docs/0.Learning_Tracker.md](./docs/0.Learning_Tracker.md)

| Giai đoạn | Tiến độ | Trạng thái |
|-----------|---------|------------|
| **Giai đoạn 1** — CRUD & API | ▓▓▓▓░░░░░░ 40% | 🟡 Đang thực hiện |
| **Giai đoạn 2** — AI & RAG | ░░░░░░░░░░ 0% | ⏳ Chưa bắt đầu |
| **Giai đoạn 3** — IoT Telemetry | ░░░░░░░░░░ 0% | ⏳ Chưa bắt đầu |
| **Giai đoạn 4** — Nâng cấp kiến trúc | ░░░░░░░░░░ 0% | ⏳ Chưa bắt đầu |

---

## 📝 Ghi chú cho người đọc

Dự án này được xây dựng theo phương pháp **học Top-Down, thực chiến từng bước nhỏ**. Mỗi commit tương ứng với một mốc học tập rõ ràng. Nếu bạn đang ở cùng hành trình học, hãy checkout từng commit để xem lộ trình đi từ 0 đến 1 của dự án.

---

<div align="center">

Made with ❤️ as a learning journey · [tranviet-tv](https://github.com/tranviet-tv)

</div>
