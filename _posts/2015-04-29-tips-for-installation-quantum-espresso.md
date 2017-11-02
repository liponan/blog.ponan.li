---
layout: post
title: "安裝 quantum espresso 之關關難過"
date: 2015-04-29 10:01
comments: true
categories: 
---
```
_sys2blacs_handle_.c:(.text+0x21): undefined reference to `ompi_mpi_comm_null'
_sys2blacs_handle_.c:(.text+0x98): undefined reference to `ompi_mpi_comm_world'
_sys2blacs_handle_.c:(.text+0x166): undefined reference to `ompi_mpi_comm_world'
/opt/intel/composer_xe_2011_sp1.8.273/mkl/lib/intel64/libmkl_blacs_openmpi_lp64.a(BI_MPI_F77_to_c_trans_comm.o): In function `BI_MPI_F77_to_c_trans_comm':
_BI_MPI_F77_to_c_trans_comm.c:(.text+0x6): undefined reference to `MPI_Comm_f2c'
make[2]: *** [pw.x] Error 1
make[2]: Leaving directory `/opt/espresso-5.1.2/PW/src'
make[1]: *** [pw] Error 1
make[1]: Leaving directory `/opt/espresso-5.1.2/PW'
make: *** [pw] Error 1
```


line 120
```
SCALAPACK_LIBS = -lmkl_scalapack_lp64 -lmkl_blacs_openmpi_lp64
```