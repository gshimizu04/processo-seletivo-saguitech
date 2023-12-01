function calcularNotaFiscal() {
    // Obter os valores inseridos pelo usuário
    var tomadorServico = document.getElementById('tomadorServico').value;
    var estadoCidade = document.getElementById('estadoCidade').value;
    var enderecoCompleto = document.getElementById('enderecoCompleto').value;
    var cnpjCpf = document.getElementById('cnpjCpf').value;
    var inscricaoMunicipal = document.getElementById('inscricaoMunicipal').value;

    var descricaoServicos = document.getElementById('descricaoServicos').value;
    var precoUnitario = parseFloat(document.getElementById('precoUnitario').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);

    // Obter a data e hora atuais
    var dataEmissao = new Date();
    var dataFormatada = dataEmissao.toLocaleString();

    // Calcular o total
    var total = (precoUnitario * quantidade).toFixed(2);
    var totalComImpostos = (total * 1.05).toFixed(2);

    // Exibir o resultado na página
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <p>Tomador do Serviço: ${tomadorServico}</p>
        <p>Estado, Cidade: ${estadoCidade}</p>
        <p>Endereço Completo: ${enderecoCompleto}</p>
        <p>CNPJ/CPF: ${cnpjCpf}</p>
        <p>Inscrição Municipal: ${inscricaoMunicipal}</p>
        <p>Data de Emissão: ${dataFormatada}</p>
        <h2>Detalhes dos Serviços</h2>
        <p>Descrição dos Serviços: ${descricaoServicos}</p>
        <p>Preço Unitário: R$ ${precoUnitario.toFixed(2)}</p>
        <p>Quantidade: ${quantidade}</p>
        <p>Total: R$ ${total}</p>
        <h2>Resultado Final</h2>
        <p>Total com Impostos: R$ ${totalComImpostos}</p>
    `;
}
