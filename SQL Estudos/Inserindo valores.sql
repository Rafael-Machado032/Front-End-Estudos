insert into tipo_cliente values (01,'Pessoa Física');
insert into tipo_cliente values (02,'Pessoa Jurídica');
insert into tipo_cliente values (03,'Cliente Especial');

--Como exite chave estrangeira fui obrigado a inserir valores primeiro na tabela tipo_cliente e depois no na tabela clientes

insert into cliente values (01,'Rafael Machado','10402010911','2007-04-14','20',01);
insert into cliente values (02,'Graziele Mendes','17151013011','2010-04-21','30',03);
insert into cliente values (03,'Vanessa Machado','17141019711','1989-04-11','16',01);
insert into cliente values (04,'Daniel Oliveira','10161053110','1970-04-29','25',03);
insert into cliente values (05,'Bruno Piscine','80141015011','1990-04-24','30',02);
insert into cliente values (06,'Teresa Ferreira','10801310211','2014-04-27','35',02);
insert into cliente values (07,'Terezinha Marlene','10171015511','2001-04-13','59',01);