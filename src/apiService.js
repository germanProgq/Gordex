import { CategorySharp, Cookie } from '@mui/icons-material';
import axios from  'axios'
import Cookies from  'js-cookie'

//Used Functions
const api = axios.create({
    baseURL: "http://185.174.136.47:8080",
});

const createCookieHeader = (token) => {
    return {        
        'Cookie': `token=${token}`,
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

    return JSON.parse(response.data);
};

export const AdminMetric = async () => {
    const ver = tokenReq();

    const result = await api.get("/api/v1/search", ver);

    return JSON.parse(result.data);
};

export const ProfileInfo = async() => {

    const ver = tokenReq()

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
    Cookies.set('token', response.data.token, { expires: 90, path: '/', secure: false, sameSite: 'Lax' });

    }
    catch(x) {
        console.error("Error", x)
    }
};

export const ValidateToken = async (token) => {
    cookie = createCookieHeader(token)
    const response = await api.get(`/api/v1/token/validate`,
        {
            headers: cookie,
        }
    );

    return JSON.parse(response.data);
};



//Captcha
export const CreateCaptcha = async () => {
    const token = tokenReq()
    try {
      const response = await axios.get('/api/v1/captcha/create', token)
      return response;
    } catch (error) {
      console.error('Error creating captcha:', error);
    }
  };

export const RefreshCaptcha = async (token) => {
    cookie = createCookieHeader(token)

    const response = await api.get(`/api/v1/captcha/refresh`,
        {
            headers: cookie,
        }
    );

    return JSON.parse(response.data);
};

export const GetCaptchaImage = async (token) => {
    cookie = createCookieHeader(token)

    const response = await api.get(`/api/v1/get/image`, 
        {
            headers: cookie,
        }
    );

    return JSON.parse(response.data);
};

export const GetCaptchaData = async (token) => {
    cookie = createCookieHeader(token)

    const response = await api.get(`/api/v1/get/data`,
        {
            headers: cookie,
        }
    );

    return JSON.parse(response.data);
};


//Product
export const GetProductList = async (catalog, category, product_id, token) => {
    const params =
    {
    catalog: catalog || null,
    category: category || null,
    product_id: product_id || null,
    token: token,
    }

    const header = createCookieHeader(token)

    const response = await api.get(`/api/v1/product/get/list`,
    {
    params: params,
    headers: header,
    })

    return JSON.parse(response.data);
};

export const GetProductData = async (token, product_id) => {
    const header = createCookieHeader(token);

    const response = await api.get(`/api/v1/product/${product_id}/get`, 
    {
        headers: header,
    })

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




//Authenticate
export const AuthAccReq = async (captchaData, email, password, token) => {
    const cookie = createCookieHeader(token);
    const requestBody = 
    {
    captcha_data: captchaData,
    mail: email,
    password: password
    };
      
    const response = await api.post('/api/v1/auth/register',
        requestBody,
        {
            headers:
            {
                cookie,
            }
        }
    );

    return JSON.parse(response.data);
};

export const RegisterAccount = async (email, password, captcha, token) => {
    const requestBody =
    {
        mail: email,
        password: password,
        captcha: captcha
    };
  
    const response = await api.post('/api/v1/account/register', requestBody, {
        headers:
        {
          'Content-Type': 'application/json',
          'Cookie': `token=${token}`
        }
    });
    return JSON.parse(response.data);
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