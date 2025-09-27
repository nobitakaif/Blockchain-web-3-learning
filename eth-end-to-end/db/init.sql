CREATE TABLE userBinance (
    id  SERIAL PRIMARY KEY NOT NULL ,
    username VARCHAR(50)  NOT NULL,
    password VARCHAR(100) NOT NULL,
    depositeAddress VARCHAR(100)  NOT NULL,
    privateKey VARCHAR(200) NOT NULL,
    balance DECIMAL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);