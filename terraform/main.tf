resource "aws_s3_bucket" "my-tf-bucket" {
  bucket = "my-tf-bucket-kondo"
  acl    = "private"
  region   = "us-east-2"
}
output "bucketName"{
  value = aws_s3_bucket.my-tf-bucket.id
  description = "bucket name"
}

