<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Pengajuan KTP</title>
    <style>
        table {
            width: 50%;
            margin: auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2 align="center">Hasil Pengajuan KTP</h2>
    <table>
        <tr>
            <th>Field</th>
            <th>Inputan</th>
        </tr>
        <tr>
            <td>Nomor Pendaftaran</td>
            <td><?php echo htmlspecialchars(implode('', $_POST['nomor_pendaftaran'] ?? [])); ?></td>
        </tr>
        <tr>
            <td>Nama</td>
            <td><?php echo htmlspecialchars($_POST['nama'] ?? '-'); ?></td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td><?php echo htmlspecialchars($_POST['alamat'] ?? '-'); ?></td>
        </tr>
        <tr>
            <td>Provinsi</td>
            <td><?php echo htmlspecialchars($_POST['provinsi'] ?? '-'); ?></td>
        </tr>
        <tr>
            <td>Kota dan Kecamatan</td>
            <td>
                <?php 
                    echo htmlspecialchars($_POST['kota'] ?? '-') . ', Kec. ' . htmlspecialchars($_POST['kecamatan'] ?? '-'); 
                ?>
            </td>
        </tr>
        <tr>
            <td>Pekerjaan</td>
            <td><?php echo htmlspecialchars($_POST['pekerjaan'] ?? '-'); ?></td>
        </tr>
        <tr>
            <td>Jenis Kelamin</td>
            <td><?php echo htmlspecialchars($_POST['jk'] ?? '-'); ?></td>
        </tr>
        <tr>
            <td>Tempat/Tanggal Lahir</td>
            <td>
                <?php 
                    echo htmlspecialchars($_POST['tempatLahir'] ?? '-') . ' / ' . htmlspecialchars($_POST['tglLahir'] ?? '-'); 
                ?>
            </td>
        </tr>
        <tr>
            <td>Kelengkapan Berkas</td>
            <td>
                <?php 
                    $berkas = [];
                    if (isset($_POST['kk'])) $berkas[] = "FC. KK";
                    if (isset($_POST['pengantar'])) $berkas[] = "Surat Pengantar";
                    if (isset($_POST['foto'])) $berkas[] = "Pas Foto";
                    if (isset($_POST['domisili'])) $berkas[] = "Surat Domisili";
                    echo !empty($berkas) ? implode(', ', $berkas) : '-';
                ?>
            </td>
        </tr>
        <tr>
            <td>File Scan</td>
            <td><?php echo htmlspecialchars($_FILES['fileScan']['name'] ?? '-'); ?></td>
        </tr>
    </table>
</body>
</html>