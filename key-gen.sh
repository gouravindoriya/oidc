CERT_DIR="certificates"
mkdir -p $CERT_DIR
openssl genpkey -algorithm RSA -out $CERT_DIR/private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -in $CERT_DIR/private_key.pem -pubout -out $CERT_DIR/public_key.pub
echo "Private key generated "