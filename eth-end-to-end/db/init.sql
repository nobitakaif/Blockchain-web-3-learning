CREATE TABLE userBinance (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    depositeAddress VARCHAR(100) UNIQUE NOT NULL,
    privateKey VARCHAR(200) NOT NULL,
    balance DECIMAL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);