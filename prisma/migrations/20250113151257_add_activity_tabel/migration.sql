-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "transportasidarat" JSONB NOT NULL,
    "transportasiudara" JSONB NOT NULL,
    "transportasilaut" JSONB NOT NULL,
    "dayarumahtangga" JSONB NOT NULL,
    "peralatanrumahtangga" JSONB NOT NULL,
    "makanan" JSONB NOT NULL,
    "sampah" JSONB NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
