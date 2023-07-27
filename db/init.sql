-- CREATE DATABASE  IF NOT EXISTS rberrocal_pg
SELECT 'CREATE DATABASE rberrocal_pg'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'rberrocal_pg')\gexec