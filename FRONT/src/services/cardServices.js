import axios from "axios";
const AUTH_URL = "http://localhost:5000/login";
const CARD_URL = "http://localhost:5000/cards";

const CREDENTIAL = { login: "letscode", senha: "lets@123" };

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const useCardService = () => {
  const authenticate = async () => {
    const response = await axios.post(AUTH_URL, CREDENTIAL, {
      headers: DEFAULT_HEADERS,
    });
    if (response.data.error) throw new Error(response.data.error);
    authHeader = { Authorization: `Bearer ${response.data.token}` };
    return authHeader;
  };

  let authHeader = undefined;

  const getToken = async () => {
    authHeader = await authenticate();
    console.log("authHeader", authHeader);
  };

  const getCards = async () => {
    if (!authHeader) await getToken();

    const response = await axios.get(CARD_URL, {
      headers: authHeader,
    });

    if (response.data.error) throw new Error(response.data.error);

    return response.data.cards;

    // return await fetch(CARD_URL, { headers: authHeader })
    //   .then((res) => {
    //     if (res.status === 200) return res.json();
    //     else if (res.status === 401) getToken();
    //     else throw new Error("unexpected status code");
    //     return getCards();
    //   })
    //   .catch(console.error);
  };

  const updateCard = async (card) => {
    if (!authHeader) await getToken();

    const response = await axios.put(`${CARD_URL}/${card.id}`, card, {
      headers: { ...authHeader, ...DEFAULT_HEADERS },
    });

    if (response.data.error) throw new Error(response.data.error);

    return response.data.card;

    // return await fetch(`${CARD_URL}/${card.id}`, {
    //   headers: { ...authHeader, ...DEFAULT_HEADERS },
    //   method: "PUT",
    //   body: JSON.stringify(card),
    // })
    //   .then((res) => {
    //     if (res.status === 200) return res.json();
    //     else if (res.status === 401) getToken();
    //     else throw new Error("unexpected status code");
    //     return updateCard(card);
    //   })
    //   .catch(console.error);
  };

  const addCard = async (card) => {
    if (!authHeader) await getToken();

    const response = await axios.post(CARD_URL, card, {
      headers: { ...authHeader, ...DEFAULT_HEADERS },
    });

    if (response.data.error) throw new Error(response.data.error);

    return updateCard(response.data.card);

    // return await fetch(`${CARD_URL}`, {
    //   headers: { ...authHeader, ...DEFAULT_HEADERS },
    //   method: "POST",
    //   body: JSON.stringify(card),
    // })
    //   .then((res) => {
    //     if (res.status === 201) return res.json();
    //     else if (res.status === 401) getToken();
    //     else throw new Error("unexpected status code");
    //     return updateCard(card);
    //   })
    //   .catch(console.error);
  };

  const removeCard = async (id) => {
    if (!authHeader) await getToken();

    const response = await axios.delete(`${CARD_URL}/${id}`, {
      headers: authHeader,
    });

    if (response.data.error) throw new Error(response.data.error);

    return response.data.cards;

    // return await fetch(`${CARD_URL}/${id}`, {
    //   headers: authHeader,
    //   method: "DELETE",
    // })
    //   .then((res) => {
    //     if (res.status === 200) return res.json();
    //     else if (res.status === 401) getToken();
    //     else throw new Error("unexpected status code");
    //     return removeCard(id);
    //   })
    //   .catch(console.error);
  };

  return {
    addCard,
    getCards,
    updateCard,
    removeCard,
  };
};

export default useCardService;
