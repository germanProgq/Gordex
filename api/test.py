import hashlib

def md5_auth(login:str, password: str) -> str:
    md5_hash = hashlib.md5(f'{login}{password}'.encode()).hexdigest()
    return md5_hash


print(md5_auth('ilya', '123'))