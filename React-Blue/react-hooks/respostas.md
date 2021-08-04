# 3-) Explique com suas palavras qual a vantagem de utilizarmos o useMemo.

* Utiliza o useMemo para desempenho de um componente enquanto ele não renderiza, ou seja, se caso eu queira mudar o estado de um componente que não precise de renderização para se atualizar, eu utilizo o useMemo para desempenho do componente. Lembrando que quando o componente for renderizado ele tera que funcionar normalmente sem o uso do useMemo e logo em seguida você poderá usar o useMemo para atualizar um estado sem precisar de renderização.


# 5-) Qual a diferença entre o useMemo e o UseCallback?

* useMemo: a finalidade de se utilizar o useMemo é para otimizar a atualização de um estado dentro do componente sem precisar renderiza-lo novamente.

* useCallback: usado quando queremos usar atualizar um componente filho sem ter renderizações desnecessárias, ou seja, quando queremos mudar um estado de um componente e queremos que aquele estado seja mudado apenas quando chamamos ele, é usado o useCallback, pois sem ele tudo que nos atualizamos no componente aquela função é renderizada desnecessária.