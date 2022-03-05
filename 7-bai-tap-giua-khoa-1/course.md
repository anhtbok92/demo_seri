# Bài tập về nhà.
### Công nghệ sử dụng
- Xây dựng Ecommerce RestFull API
- Nodejs, Express, JWT, Mongoose...

### Thiết kế database (model)

#### - Bảng user (user table) - Quản lý người dùng và admin
- name: string, required
- email: string, required
- password: string, required
- isAdmin: boolean, required

#### - Bảng product (product table) - Quản lý sản phẩm
- user: Ref: User (sản phẩm được tạo bởi ai)
- name: string, required (tên sản phẩm)
- image: string, required (ảnh sản phẩm)
- brand: string, required (thương hiệu)
- category: string, required (loại sản phẩm)
- description: string, required (mô tả sản phẩm)
- reviews: Object (review về sản phẩm, ai review)
  - reviewSchema:
    - name: string, required
    - rating: number, required
    - comment: string, required
    - user: Ref: User
- rating: number, required (số sao)
- numReviews: number, required (số lượng review)
- price: number, required (giá sản phẩm)
- countInStock: number, required (số lượng hàng trong kho)

#### - Bảng order (order table) - Quản lý đơn hàng
- user: Ref: User (sản phẩm được mua ai)
- orderItems: Object (Thông tin đơn hàng)
    - orderItemsSchema:
        - name: string, required (tên sản phẩm)
        - qty: number, required (số lượng sản phẩm)
        - image: string, required (ảnh sản phẩm)
        - price: number, required (giá sản phẩm)
        - product: Ref: Product, required (refer bảng sản phẩm)
- shippingAddress: Object (Địa chỉ ship đơn hàng)
    - shippingAddressSchema:
        - address: string, required
        - city: string, required
        - postalCode: string, required
        - country: string, required
- paymentResult: Object (kết quả thanh toán của đơn hàng)
    - paymentResultSchema:
        - id: string
        - status: string
        - update_time: string
        - email_address: string
- paymentMethod: string, required
- taxPrice: number, required
- shippingPrice: number, required
- totalPrice: number, required
- isPaid: number, required
- paidAt: date
- isDelivered: boolean, required
- deliveredAt: date

### Thiết kế API (router)

#### User API

1. Register a new user
```angular2html
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
```

2. Auth user & get token
```angular2html
// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
```

3. Get user profile
```
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
```

4. Update user profile
```
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
```

5. Get all users
```
// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
```

6. Delete user
```
// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
```

7. Get user by ID
```
// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
```

8. Update user
```
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
```