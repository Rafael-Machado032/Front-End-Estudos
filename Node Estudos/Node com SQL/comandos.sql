CREATE TABLE clientenode (
    i_clientenode_clientenode INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_nome_clientenode VARCHAR(45), 
    s_idade_clientenode VARCHAR(45)
);

INSERT INTO clientenode
VALUES (
    id,
    'Ines Trindade',
    '33'
);

SELECT * FROM clientenode;

ALTER TABLE clientenode
ADD i_clientenode_clientenode INT PRIMARY KEY NOT NULL AUTO_INCREMENT;