// p21 三角形
// n本の棒があります。棒iの長さはaです。それらの棒から3ほんを選んでできるだけ周囲の長い三角形を作り、最大の周長を求めなさい。三角形が作れない場合は0を答えとする。
// アルゴリズム：最も長い棒 < 他２本の棒の和 さえ成り立てば三角形は作れる。

const n = 5
const a = [3, 5, 4, 6, 100, 900, 1000];

max = Math.max.apply(null, a);

a.sort(function(a, b){
    return b - a;
});

for (var i = 0; i < a.length; i++) {
    // 最も長い辺の抽出
    if (a[0] < (a[1] + a[2])) {
        console.log(a[0] + a[1] + a[2]);
        break;
    }
    a.shift();
    if (a.length < 3) {
        console.log(0);
    }
}