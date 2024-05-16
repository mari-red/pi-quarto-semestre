CREATE TABLE usuario (
                         usuario_id SERIAL PRIMARY KEY,
                         nome VARCHAR(100) NOT NULL,
                         email VARCHAR(100) NULL,
                         senha VARCHAR(100) NULL,
                         criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caracteristicas (
                                 caracteristicas_id SERIAL PRIMARY KEY,
                                 usuario_id INT REFERENCES usuario(usuario_id),
                                 altura DECIMAL(5,2),
                                 peso DECIMAL(5,2),
                                 genero VARCHAR(10),
                                 FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
);

CREATE TABLE exercicios (
                            exercicio_id SERIAL PRIMARY KEY,
                            nome VARCHAR(100) NOT NULL,
                            descricao TEXT
);

CREATE TABLE exercicios_usuario (
                                    registro_id SERIAL PRIMARY KEY,
                                    usuario_id INT REFERENCES usuario(usuario_id),
                                    exercicio_id INT REFERENCES exercicios(exercicio_id),
                                    data_realizacao DATE,
                                    tempo_minutos INT,
                                    calorias_queimadas DECIMAL(6,2),
                                    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id),
                                    FOREIGN KEY (exercicio_id) REFERENCES exercicios(exercicio_id)
);
