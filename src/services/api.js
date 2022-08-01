import axios from "axios";
const api = axios.create({
  baseURL: "https://api-resilia-store.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProdutos = async () => {
  try {
    const response = await api.get("/produtos");
    const produtos = await response.data.produtos;
    return produtos;
  } catch (erro) {
    console.log(erro);
  }
};

export const getProdutosCategoria = async (categoria) => {
  try {
    const response = await api.get(`/produtos/categoria/${categoria}`);
    const produtos = await response.data.produtos;
    return produtos;
  } catch (erro) {
    console.log(erro);
  }
};
export const getProdutoId = async (id) => {
  try {
    const response = await api.get(`/produtos/id/${id}`);
    const produto = await response.data.produtos;
    return produto;
  } catch (erro) {
    console.log(erro);
  }
};
