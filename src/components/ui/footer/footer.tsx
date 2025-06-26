import { ImageIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-10 bg-neutral-800">
      <div className="pt-14 pb-6 text-white space-y-32">
        <div className="grid grid-cols-3">
          <div className="bg-gray-400 h-[100px] w-[250px] rounded-2xl flex items-center justify-center">
            <ImageIcon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-medium pb-2">Navigation</h3>
            <div className="flex gap-10 text-gray-400">
              <div>
                <p className="hover:text-white cursor-pointer">Home</p>
                <p className="hover:text-white cursor-pointer">
                  Database Alumni
                </p>
                <p className="hover:text-white cursor-pointer">Info Loker</p>
              </div>
              <div>
                <p className="hover:text-white cursor-pointer">
                  Berita IKA TE UPI
                </p>
                <p className="hover:text-white cursor-pointer">
                  Berita Mahasiswa TE UPI
                </p>
                <p className="hover:text-white cursor-pointer">E-Learning</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium pb-2">Address</h3>
            <p>Gedung Fakultas Pendidikan Teknik dan Industri</p>
            <p className="text-gray-400">
              Jl. Dr. Setiabudi No.207, Isola, Kec. Sukasari, Kota Bandung -
              40154
            </p>
            <p className="text-gray-400">Jawa Barat - Indonesia</p>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-between">
            <div className="text-gray-400">Term of use | Privacy Policy</div>
            <div>Social</div>
          </div>
          <div className="absolute left-[50%] -translate-[50%] top-[50%]">
            © 2025 IKA TEUAS UPI All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
