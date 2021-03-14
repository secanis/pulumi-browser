export default () => ({
    endpoint: process.env.S3_URL ?? null,
    access_id: process.env.S3_ACCESS_KEY ?? '',
    secret_key: process.env.S3_SECRET_KEY ?? '',
    bucket: process.env.S3_BUCKET ?? null,
});
