-- Foi criada outra tabela com o nome cliente_backup
-- foi inserido o valor da tabela cliente dentro da tabela cliente_backup
INSERT INTO  cliente_backup ( 
	i_cliente_cliente, 
	s_nome_cliente, 
	s_cpf_cliente, 
	d_nasc_cliente, 
	i_idade_cliente, 
	i_tipo_cliente
)
SELECT * FROM cliente;