/**
 * Dataset customizado: ds-viagens-paises-aluno05
 *
 * Expõe uma lista estática de países para seleção em viagens.
 * Colunas (nesta ordem): codigo (ISO-3), nome (pt-BR), sigla (ISO-2).
 *
 * Executado no servidor (motor Rhino / base ES5): usar var/function,
 * sem arrow functions, template literals, let/const ou classes ES6.
 */
function createDataset(fields, constraints, sortFields) {
    try {
        var dataset = DatasetBuilder.newDataset();

        // 1) Colunas, exatamente nesta ordem.
        dataset.addColumn("codigo");
        dataset.addColumn("nome");
        dataset.addColumn("sigla");

        // 2) Registros: [codigo ISO-3, nome em português, sigla ISO-2].
        //    A primeira linha é obrigatoriamente o Brasil.
        var paises = [
            ["BRA", "Brasil", "BR"],
            ["ARG", "Argentina", "AR"],
            ["URY", "Uruguai", "UY"],
            ["PRY", "Paraguai", "PY"],
            ["CHL", "Chile", "CL"],
            ["BOL", "Bolívia", "BO"],
            ["PER", "Peru", "PE"],
            ["COL", "Colômbia", "CO"],
            ["USA", "Estados Unidos", "US"],
            ["CAN", "Canadá", "CA"],
            ["MEX", "México", "MX"],
            ["PRT", "Portugal", "PT"],
            ["ESP", "Espanha", "ES"],
            ["FRA", "França", "FR"],
            ["ITA", "Itália", "IT"],
            ["DEU", "Alemanha", "DE"],
            ["GBR", "Reino Unido", "GB"],
            ["JPN", "Japão", "JP"],
            ["CHN", "China", "CN"],
            ["AUS", "Austrália", "AU"]
        ];

        for (var i = 0; i < paises.length; i++) {
            dataset.addRow(paises[i]);
        }

        return dataset;
    } catch (e) {
        // Erros retornados como dado, não como exceção solta.
        var erro = DatasetBuilder.newDataset();
        erro.addColumn("ERROR");
        erro.addRow(["" + e]);
        return erro;
    }
}
