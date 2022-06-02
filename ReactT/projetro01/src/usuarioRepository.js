import { con } from '../../connection.js'

export async function logar(login, senha){
    const comando = `
        select id_funcionario 	    id,
        nm_funcionario              nome,
        ds_CPF                      CPF
        from tb_usuario
        where ds_login 		        = ?
        and ds_senha		    	= ? `

    const [linhas] = await con.query(comando, [login, senha]);

    return linhas[0];
}