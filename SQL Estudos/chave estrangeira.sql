--Alteração do tipo do campo
alter table cliente modify column i_idade_cliente tinyint;
alter table cliente add i_idade_cliente int;
alter table cliente modify column i_cliente_cliente int;

--criado a tabela tipo_cliente
create table tipo_cliente( 
    i_tipocliente_tipocliente INT PRIMARY KEY AUTO_INCREMENT,
    s_dectipocliente_tipocliente VARCHAR(100) NOT NULL
);

--Fazendo a ligação da chave primaria com a estrangeira
ALTER TABLE cliente ADD CONSTRAINT fk_tipocliente FOREIGN KEY (i_tipo_cliente) REFERENCES tipo_cliente (i_tipocliente_tipocliente);

--Inserindo coluna
alter table cliente add i_tipo_cliente int;