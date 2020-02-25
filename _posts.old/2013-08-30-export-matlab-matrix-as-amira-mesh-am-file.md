---
layout: post
title: "將 Matlab 矩陣匯出成 Amira mesh (.am)"
date: 2013-08-30 10:01
comments: true
categories: [Matlab, .m, Amira, confocal]
---
簡單筆記一下今天工作的成果：將 Matlab 的矩陣噴出成 Amira 的 `.am` 檔案，也就是 Amira 3D mesh。
這個成果是根據我手上有的 `.am` 檔案還有 [Matlab Central](http://www.mathworks.com/matlabcentral/fileexchange/39235-load-amira-5-2-2-files/content/LoadData_Amira.m " Load Amira 5.2.2 Files by Shawn ") 上的 `LoadData_Amira.m` 逆推的，特此致謝。

雖然從 `LoadData_Amira.m` 看起來 AM 檔案有支援 uint8 之外的其他數值格式，但是我剛才弄半天弄不太出來，所以為了簡便，就先強制輸出為 uint8 吧，科科！
<!--more-->
``` matlab m2am.m
function m2am(A, filename)
% written by Po-Nan Li @ Institute of Physics, Academia Sinica
% V1.1 @ Aug 30, 2013

A(A<0) = 0;   % because we will convert the matrix to uint8, hence all
              % non-postive values must be turned into zeros
A = uint8(A); % force to uint8
sz = size(A); % get the dimension information of A
dim = length(sz); % number of dimensions
fid = fopen(filename, 'w'); % open file
fprintf(fid, 'define Lattice'); % line #1

% print out dimensions
for k = 1:dim
    fprintf(fid, ' %d', sz(k));
end

fprintf(fid, '\nParameters {\n'); % line #2
fprintf(fid, '    Content "%dx%dx%d byte, uniform coordinates"\n', sz(1), sz(2), sz(3)); % line #3
fprintf(fid, '    DataWindow %d %d,\n', min(min(min(A))), max(max(max(A)))); % line #4
fprintf(fid, '    BoundingBox %d   %d %d   %d %d   %d,\n', 0, sz(1)-1, 0, sz(2)-1, 0, sz(3)-1); % line #5
fprintf(fid, '    CoordType "uniform"\n}\n'); % line #6
fprintf(fid, 'Lattice { byte Data } @1\n@1\n'); % lines #6 and #7
    
lg  = numel(A); % calculate the total size of matrix elements

% dump all elements
for t = 1:lg
        fprintf(fid, '%d\n', A(t));
end

fclose(fid);

end

```



依照我個人的慣例，寫作成 m2 家族 XD