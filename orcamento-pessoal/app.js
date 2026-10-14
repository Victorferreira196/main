class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        for(let i in this){
            if(this[i] === undefined || this[i] === '' || this[i] === null){
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoid = localStorage.getItem('id')
        return parseInt(proximoid) + 1
    }

    gravar(d){

        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){

        //array despesas
        let despesas = Array()

        //console.log('teste')
        let id = localStorage.getItem('id')
        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))

            if(despesa === null){continue}

            //console.log(i,despesa)
            despesa.id = i 
            despesas.push(despesa)
        }
        //console.log(despesas)
        return despesas
    }

    pesquisar(despesa){

        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()
        console.log(despesasFiltradas)

        if(despesa.ano != ''){
        despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }    

        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }

        if(despesa.descricao != ''){
        despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        if(despesa.valor != ''){
        despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }
        return despesasFiltradas
    } 
        remover(id){
            localStorage.removeItem(id)
        }
}

let bd = new Bd()

function cadastrarDespesa() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')
    let tipo = document.getElementById('tipo')

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    if(despesa.validarDados()) {
		bd.gravar(despesa)
		//dialogo de sucesso
        document.getElementById('tituloModal').innerHTML = 'Sucesso'
        document.getElementById('modalTituloDiv').className = 'modal-header text-success'
        document.getElementById('modalConteudo').innerHTML = 'Registro gravado com sucesso'
        document.getElementById('btnModal').innerHTML = 'Ok'
        document.getElementById('btnModal').className = 'btn btn-success'
        $('#modalRegistrarTabela').modal('show')

        ano.value = ''
        mes.value = ''
        dia.value = ''
        descricao.value = ''
        valor.value = ''
        tipo.value = ''
        
	} else {
		//dialog de erro
        document.getElementById('tituloModal').innerHTML = 'Erro'
        document.getElementById('modalTituloDiv').className = 'modal-header text-danger' 
        document.getElementById('modalConteudo').innerHTML = 'Verifique se todos os campos foram preenchidos' 
        document.getElementById('btnModal').innerHTML = 'Voltar'  
        document.getElementById('btnModal').className = 'btn btn-danger'
        $('#modalRegistrarTabela').modal('show')
        
	}
}

//o botão so fecha se for assim :o
function fecharbtn(){
    $('#modalRegistrarTabela').modal('hide')
}


function carregaListaDespesas(despesas = Array(), filtro = false) {

    if(despesas.length == 0 && filtro == false){
		despesas = bd.recuperarTodosRegistros() 
	}
	
	let listaDespesas = document.getElementById("listaDespesas")
    listaDespesas.innerHTML = ''
	despesas.forEach(function(d){

		//Criando a linha (tr)
		var linha = listaDespesas.insertRow();

		//Criando as colunas (td)
		linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}` 

		//Ajustar o tipo
		switch(d.tipo){
			case '1': d.tipo = 'Alimentação'
				break
			case '2': d.tipo = 'Educação'
				break
			case '3': d.tipo = 'Lazer'
				break
			case '4': d.tipo = 'Saúde'
				break
			case '5': d.tipo = 'Transporte'
				break
			
		}
		linha.insertCell(1).innerHTML = d.tipo
		linha.insertCell(2).innerHTML = d.descricao
		linha.insertCell(3).innerHTML = d.valor

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.id = 'id_despesa_' + d.id
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        btn.onclick = function(){

            let id = this.id.replace('id_despesa_', '')

            bd.remover(id)

            window.location.reload()
        }
        linha.insertCell(4).append(btn)

		console.log(d)
	})

 }

 function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value
    let tipo = document.getElementById('tipo').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

	let despesas = bd.pesquisar(despesa)
	 
	this.carregaListaDespesas(despesas, true)
}