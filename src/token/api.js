import axios from  'axios'
import Cookies from  'js-cookie'

//Used Functions (All done)
const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true
});

const createCookieHeader = (token) => {
    return {  
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    };
};

const tokenReq = () => {
    const token = Cookies.get('token')

    if (!token) {
        throw new Error ("Token is not in cookies")
    }

    const cookieHeader = createCookieHeader(token)

    return {    
        withCredentials: true,
    }
};



//Default
export const BasketNewItemRq = async () => {
    const result = await api.post(`/api/v1/user/basket/add`);

    return JSON.parse(result.data);
};

export const BasketGetItemRq = async () => {
    const result = await api.post(`/api/v1/user/basket/get`);

    return JSON.parse(result.data);
};

export const BasketRemoveItemRq = async () => {
    const result = await api.post(`/api/v1/basket/remove`);

    return JSON.parse(result.data);
};

export const XChangeHistory = async () => {
    const result = await api.get('/api/v1/exchange-rates/history');

    return JSON.parse(result.data);
};

export const GetAdminPage = async (token) => {
    const result = await api.get(`/api/v1/admin/access/${token}`);

    return JSON.parse(result.data);
};

export const GetCardData = async (cc) => {
    const data = {
        cc: cc,
    }

    const result = await api.get('/api/v1/payment/card_data', data);

    return JSON.parse(result.data);
};

export const SearchProducts = async(query) => {
    const data = {
        query: query,
    };

    const response = await api.get('/api/v1/search', data);

    return response.data;
};

export const AdminMetric = async () => {
    const ver = createCookieHeader(Cookies.get('token'));

    const result = await api.get("/api/v1/search", ver);

    return JSON.parse(result.data);
};

export const ProfileInfo = async() => {

    const ver = createCookieHeader(Cookies.get('token'))

    const response = await api.post("/api/v1/profile/info", ver);

    return JSON.parse(response.data);
};

export const UpdateCountryProfile = async (info) => {
    const token = Cookies.get('token')

    if (!token) {
        throw new Error ("No token found");
    }

    const cookie = createCookieHeader(token)

    const response = await api.put('/api/v1/profile/update/country',
      info,
      {
        headers: {
          'Content-Type': 'application/json',
           cookie,
          'accept': 'application/json',
        }
      }
    );

    return JSON.parse(response.data);
};

export const GetCurrenciesProfile = async (token) => {
    const cookie = createCookieHeader(token);

    const result = await api.get('/api/v1/profile/get/currencies',
        {
        headers: cookie,
        });

    return JSON.parse(result.data);
};

export const UpdateEmailForm = async (token, update) => {   
    const cookie = `token=${token}`;

    const result = await api.put('/api/v1/profile/update/email',
    update,
    {
        headers:
        {
          'Content-Type': 'application/json',
          'Cookie': cookie,
          'accept': 'application/json',
        },
    });

    return JSON.parse(result.data);
};






//Token
export const CreateToken = async () => {
    try {
        const response = await api.get(`/api/v1/token/create`);
        Cookies.set('token', response.data.token, { expires: 90, path: '/', secure: true, sameSite: 'None' });
        return response.data.token;
    }
    catch(x) {
        console.error("Error", x)
    }
};

export const ValidateToken = async () => {
    const cookie = createCookieHeader(Cookies.get('token'))
    const response = await api.get(`/api/v1/token/validate`, cookie);

    return JSON.parse(response.status);
};



//Captcha
export const CreateCaptcha = async () => {
    const cookie = createCookieHeader(Cookies.get('token'))
      const response = await api.get('/api/v1/captcha/create', cookie)
  };

// export const RefreshCaptcha = async () => {
//     const cookie = createCookieHeader(Cookies.get('token'))

//     const response = await api.get(`/api/v1/captcha/refresh`, cookie
//     );

//     return JSON.parse(response.data);
// };

export const GetCaptchaImageUrl = async () => {
    const cookie = Cookies.get('token');

    try {
        // Make the request with the response type set to 'arraybuffer'
        const response = await api.get(`/api/v1/captcha/get/image`, {
            headers: {
                'Authorization': `Bearer ${cookie}`,
            },
            responseType: 'arraybuffer'
        });

        const blob = new Blob(Uint8Array[response.data], { type: 'image/png' });
        const url = URL.createObjectURL(blob);

        return url;

    } catch (error) {
        console.error('Error fetching captcha image:', error);
        throw error; // Rethrow or handle the error as needed
    }
};
export const GetCaptchaData = async () => {
    const cookie = createCookieHeader(Cookies.get('token'))

    const response = await api.get(`/api/v1/captcha/get/data`, cookie
    );

    return response.data;
};


//Product
export const GetProductList = async (catalog, category, product_id) => {
    const params =
    {
    catalog: catalog || null,
    category: category || null,
    product_id: product_id || null,
    }

    const header = createCookieHeader(Cookies.get('token'))

    const response = await api.get(`/api/v1/product/get/list`,
    {
    params: params,
    header,
    })

    return JSON.parse(response.data);
};

export const GetProductData = async (product_id) => {
    const header = createCookieHeader(Cookies.get('token'))

    const response = await api.get(`/api/v1/product/${product_id}/get`, header);

    return JSON.parse(response.data);
};

export const ChangeProductInfo = async (usd = null, usdt = null, btc = null, euro = null, title = "", location = "", item_type = null, discount = null,
    catalog = "", category, brand = "", brandImg = "", colors = "", config = "",
    doge = null, oldDoge = null, xmr = null, oldXmr = null, ltc = null, oldLtc = null, eth = null, oldEth = null,
    oldUsd = null, oldEuro = null, deliveryPrice = null, internationalDelivery = false, expressDelivery = false,) => {
    
    if (!title) {
        return false;
    }

    const data =  {
        usd: usd,
        usdt: usdt,
        btc: btc,
        euro: euro,
        title: title,
        location: location,
        item_type: item_type,
        discount: discount,
        catalog: catalog,
        category: category,
        brand: brand,
        brandImg: brandImg,
        colors: colors,
        config: config,
        doge: doge,
        oldDoge: oldDoge,
        xmr: xmr,
        oldXmr: oldXmr,
        ltc: ltc,
        oldLtc: oldLtc,
        eth: eth,
        oldEth: oldEth,
        oldUsd: oldUsd,
        oldEuro: oldEuro,
        deliveryPrice: deliveryPrice,
        internationalDelivery: internationalDelivery,
        expressDelivery: expressDelivery
    };
    const response = await api.post(`/api/v1/admin/product/info/add`, data);

    return JSON.parse(response.data);
};

export const CreateNewProduct = async (usd = null, usdt = null, btc = null, euro = null, title = "", location = "", item_type = null, discount = null,
    catalog = "", category, brand = "", brandImg = "", colors = "", config = "",
    doge = null, oldDoge = null, xmr = null, oldXmr = null, ltc = null, oldLtc = null, eth = null, oldEth = null,
    oldUsd = null, oldEuro = null, deliveryPrice = null, internationalDelivery = false, expressDelivery = false,) => {
    
    if (!category || !title) {
        return false;
    }

    const data =  {
        usd: usd,
        usdt: usdt,
        btc: btc,
        euro: euro,
        title: title,
        location: location,
        item_type: item_type,
        discount: discount,
        catalog: catalog,
        category: category,
        brand: brand,
        brandImg: brandImg,
        colors: colors,
        config: config,
        doge: doge,
        oldDoge: oldDoge,
        xmr: xmr,
        oldXmr: oldXmr,
        ltc: ltc,
        oldLtc: oldLtc,
        eth: eth,
        oldEth: oldEth,
        oldUsd: oldUsd,
        oldEuro: oldEuro,
        deliveryPrice: deliveryPrice,
        internationalDelivery: internationalDelivery,
        expressDelivery: expressDelivery
    };
    const response = await api.post(`/api/v1/admin/product/new`, data);

    return JSON.parse(response.data);
};

export const GetProductFile = async (product_id, file_id) => {
    const response = await api.get(`/api/v1/product/${product_id}/${file_id}/get`);

    return JSON.parse(response.data);
};

export const AdminFileUpload_Product = async (product_id, file) => {
    const formData = new FormData();
    formData.append('product_id', product_id);
    formData.append('file', file);
  
    const response = await api.post('/api/v1/admin/files/upload',
        formData,
    {
        headers:
        {
          'Content-Type': 'multipart/form-data'
        }
    });

    return JSON.parse(response.data);
};

export const GetProductCategories = async (catalog) => {
    const data = {
        catalog: catalog,
    };
    const response = await api.get(`/api/v1/categories/get`, data);

    return JSON.parse(response.data);
};

export const GetCatalogsWithCategories = async () => {
    const response = await api.get(`/api/v1/catalog/get`);

    return JSON.parse(response.data);
};




//Authenticate ----Done
export const AuthAccReq = async (captchaData, email, password, input) => {
    const token = createCookieHeader(Cookies.get('token')); // Assuming this formats the token correctly

    const requestBody = {
        captcha_data: {
            captcha_id: captchaData,
            mail: email,
            password: password,
            captcha_text: input,
        }
    };

    try {
        const response = await api.post('/api/v1/account/auth', requestBody, {
            headers: {
                'Authorization': Cookies.get('token'), // Add the token to the headers
                'Content-Type': 'application/json', // Set the content type
            },
        });

        return response.status; // Return the response data (e.g., access token)

    } catch (error) {
        console.error('Error during authentication:', error);
        throw error; // Rethrow the error for further handling if needed
    }
};

export const RegisterAccount = async (captchaData, email, password) => {
    const requestBody =
    {
        mail: email,
        password: password,
        captcha: captchaData,
    };
  
    const response = await api.post('/api/v1/account/register', requestBody, {
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });
    return response.status;
};


//Favorite Products

export const GetFavProducts = async (token) => {
    const cookie = createCookieHeader(token);

    const response = await api.post('/api/v1/favorites/get',
        {
            headers: cookie,
        }
    );

    return JSON.parse(response.data);
};

export const DeleteFavProducts = async (product_id, token) => {
    const data = {
        product_id: product_id,
    }
    const cookie = createCookieHeader(token);

    const response = await api.delete("/api/v1/favorites/delete", 
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': cookie,
                'accept': 'application/json',
              }
        }
    );

    return JSON.parse(response.data);

};

export const AddFavProduct = async (product_id, token) => {
    const data = {
        product_id: product_id,
    }
    const cookie = createCookieHeader(token);

    const response = await api.post("/api/v1/favorites/add", 
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': cookie,
                'accept': 'application/json',
              }
        }
    );

    return JSON.parse(response.data);
};