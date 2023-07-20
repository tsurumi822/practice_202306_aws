# Nginxのバージョンは軽量版の「alpine」
FROM --platform=linux/x86_64 nginx:alpine

# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*


# Nginxの設定ファイルをコンテナにコピー
# COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

VOLUME /var/log/nginx
VOLUME /myapp/public
VOLUME /myapp/tmp

# ビルド完了後にNginxを起動
CMD nginx -g 'daemon off;' -c /etc/nginx/nginx.conf