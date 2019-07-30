provider "cloudflare" {
  email = var.cloudflare_email
  token = var.cloudflare_token
}

resource "cloudflare_record" "main_record" {
  domain     = "elenaensusalsa.com"
  name       = "elenaensusalsa.com"
  type       = "A"
  value      = "185.199.108.153"
  proxied    = false
}

resource "cloudflare_record" "www_record" {
  domain     = "elenaensusalsa.com"
  name       = "www"
  type       = "A"
  value      = "185.199.108.153"
  proxied    = false
}
