# Api سبد خرید و لیست محصولات فروشگاهی

یک Api ساده برای مدیریت لیست سفارشات و محصولات با امکان ورود و ثبت نام کاربران

## قابلیت ها

### مدیریت محصولات

- **افزودن محصول جدید** (`POST /product`)
- **دریافت همه محصولات** (`GET /product`)
- **دریافت یک محصول خاص** (`GET /product/:id`)
- **بروزرسانی محصول** (`PUT /product/:id`)
- **حذف محصول** (`DELETE /product/:id`)

### مدیریت سفارشات

- **افزودن سفارش جدید** (`POST /order`)
- **دریافت تاریخچه محصول خاص** (`GET /order/:id`)
- **بروزرسانی سفارش** (`PUT /order/:id`)

### امکان ورود و ثبت نام کاربران

- **ورود به حساب کاربری** (`POST /auth/login`)
- **ساخت حساب کاربری** (`POST /auth/register`)

---

## تکنولوژی‌های استفاده شده

- **زبان/پلتفرم**: Node.js • Express.js
- **پایگاه داده**: MongoDB • Mongoose
- **احراز هویت**: JWT • bcrypt
- **ابزارها**: Nodemon • winston

---

## راه‌اندازی پروژه

### پیش‌نیازها

- نصب [Node.js](https://nodejs.org) (نسخه ۱۴ یا بالاتر)
- نصب [MongoDB](https://www.mongodb.com/try/download/community)
- ابزارهایی مثل [Postman](https://www.postman.com)

### مراحل نصب

1. **کلون پروژه**:

   ```bash
   git clone https://github.com/sajjadnazaridev/Shop_api_node.js.git
   cd Task-managment-Node.js
   ```

2. **نصب وابستگی‌ها**:

   ```bash
   npm install
   ```

3. **راه‌اندازی پایگاه داده**:
   - مطمئن شوید MongoDB در حال اجراست.

---

## اجرای پروژه

```bash
npm start
```

---

## مشارکت

- گزارش باگ یا پیشنهادات را در [Issues](https://github.com/sajjadnazaridev/Shop_api_node.js/issues) مطرح کنید.
- برای مشارکت، از طریق Pull Request اقدام نمایید.
