/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: false, 
  },
  typescript: {
    // !! WARN !!!
    // プロジェクトにタイプエラーがあっても、プロダクションビルドが正常に完了するようにすると危険です。
    // プロジェクトにタイプエラーがあっても、本番ビルドが正常に完了するようにします。
    // !! WARN !!!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
